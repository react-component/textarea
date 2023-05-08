import clsx from 'classnames';
import { BaseInput } from 'rc-input';
import {
  fixControlledValue,
  resolveOnChange,
} from 'rc-input/lib/utils/commonUtils';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { ReactNode } from 'react';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import type {
  ResizableTextAreaRef,
  TextAreaProps,
  TextAreaRef,
} from './interface';
import ResizableTextArea from './ResizableTextArea';

function fixEmojiLength(value: string, maxLength: number) {
  return [...(value || '')].slice(0, maxLength).join('');
}

function setTriggerValue(
  isCursorInEnd: boolean,
  preValue: string,
  triggerValue: string,
  maxLength: number,
) {
  let newTriggerValue = triggerValue;
  if (isCursorInEnd) {
    // 光标在尾部，直接截断
    newTriggerValue = fixEmojiLength(triggerValue, maxLength!);
  } else if (
    [...(preValue || '')].length < triggerValue.length &&
    [...(triggerValue || '')].length > maxLength!
  ) {
    // 光标在中间，如果最后的值超过最大值，则采用原先的值
    newTriggerValue = preValue;
  }
  return newTriggerValue;
}

const TextArea = React.forwardRef<TextAreaRef, TextAreaProps>(
  (
    {
      defaultValue,
      value: customValue,
      onFocus,
      onBlur,
      onChange,
      allowClear,
      maxLength,
      onCompositionStart,
      onCompositionEnd,
      suffix,
      prefixCls = 'rc-textarea',
      classes,
      showCount,
      className,
      style,
      disabled,
      hidden,
      classNames,
      styles,
      onResize,
      ...rest
    },
    ref,
  ) => {
    const [value, setValue] = useMergedState(defaultValue, {
      value: customValue,
      defaultValue,
    });
    const resizableTextAreaRef = useRef<ResizableTextAreaRef>(null);

    const [focused, setFocused] = React.useState<boolean>(false);

    const [compositing, setCompositing] = React.useState(false);
    const oldCompositionValueRef = React.useRef<string>();
    const oldSelectionStartRef = React.useRef<number>(0);
    // Since ResizeObserver would resize once on mounted, manual resizing should be happened after that
    const [resizeStatus, setResizeStatus] = React.useState<
      'mounted' | 'resized' | null
    >(null);

    const focus = () => {
      resizableTextAreaRef.current.textArea.focus();
    };

    useImperativeHandle(ref, () => ({
      resizableTextArea: resizableTextAreaRef.current,
      focus,
      blur: () => {
        resizableTextAreaRef.current.textArea.blur();
      },
    }));

    useEffect(() => {
      setFocused((prev) => !disabled && prev);
    }, [disabled]);

    // =========================== Value Update ===========================
    // Max length value
    const hasMaxLength = Number(maxLength) > 0;

    const onInternalCompositionStart: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (e) => {
      setCompositing(true);
      // 拼音输入前保存一份旧值
      oldCompositionValueRef.current = value as string;
      // 保存旧的光标位置
      oldSelectionStartRef.current = e.currentTarget.selectionStart;
      onCompositionStart?.(e);
    };

    const onInternalCompositionEnd: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (e) => {
      setCompositing(false);

      let triggerValue = e.currentTarget.value;
      if (hasMaxLength) {
        const isCursorInEnd =
          oldSelectionStartRef.current >= maxLength! + 1 ||
          oldSelectionStartRef.current ===
            oldCompositionValueRef.current?.length;
        triggerValue = setTriggerValue(
          isCursorInEnd,
          oldCompositionValueRef.current as string,
          triggerValue,
          maxLength!,
        );
      }
      // Patch composition onChange when value changed
      if (triggerValue !== value) {
        setValue(triggerValue);
        resolveOnChange(e.currentTarget, e, onChange, triggerValue);
      }

      onCompositionEnd?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      let triggerValue = e.target.value;
      if (!compositing && hasMaxLength) {
        // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
        const isCursorInEnd =
          e.target.selectionStart >= maxLength! + 1 ||
          e.target.selectionStart === triggerValue.length ||
          !e.target.selectionStart;
        triggerValue = setTriggerValue(
          isCursorInEnd,
          value as string,
          triggerValue,
          maxLength!,
        );
      }
      setValue(triggerValue);
      resolveOnChange(e.currentTarget, e, onChange, triggerValue);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const { onPressEnter, onKeyDown } = rest;
      if (e.key === 'Enter' && onPressEnter) {
        onPressEnter(e);
      }
      onKeyDown?.(e);
    };

    const handleFocus: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
      setFocused(true);
      onFocus?.(e);
    };

    const handleBlur: React.FocusEventHandler<HTMLTextAreaElement> = (e) => {
      setFocused(false);
      onBlur?.(e);
    };

    // ============================== Reset ===============================
    const handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setValue('');
      focus();
      resolveOnChange(resizableTextAreaRef.current.textArea, e, onChange);
    };

    let val = fixControlledValue(value);

    if (
      !compositing &&
      hasMaxLength &&
      (customValue === null || customValue === undefined)
    ) {
      // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
      val = fixEmojiLength(val, maxLength!);
    }

    let suffixNode = suffix;
    let dataCount: ReactNode;
    if (showCount) {
      const valueLength = [...val].length;

      if (typeof showCount === 'object') {
        dataCount = showCount.formatter({
          value: val,
          count: valueLength,
          maxLength,
        });
      } else {
        dataCount = `${valueLength}${hasMaxLength ? ` / ${maxLength}` : ''}`;
      }

      suffixNode = (
        <>
          {suffixNode}
          <span
            className={clsx(`${prefixCls}-data-count`, classNames?.count)}
            style={styles?.count}
          >
            {dataCount}
          </span>
        </>
      );
    }

    const handleResize: TextAreaProps['onResize'] = (size) => {
      onResize?.(size);
      if (resizeStatus === null) {
        setResizeStatus('mounted');
      } else if (resizeStatus === 'mounted') {
        setResizeStatus('resized');
      }
    };

    const textarea = (
      <BaseInput
        value={val}
        allowClear={allowClear}
        handleReset={handleReset}
        suffix={suffixNode}
        prefixCls={prefixCls}
        classes={{
          affixWrapper: clsx(classes?.affixWrapper, {
            [`${prefixCls}-show-count`]: showCount,
            [`${prefixCls}-textarea-allow-clear`]: allowClear,
          }),
        }}
        disabled={disabled}
        focused={focused}
        className={className}
        style={{
          ...style,
          ...(resizeStatus === 'resized' ? { height: 'auto' } : {}),
        }}
        dataAttrs={{
          affixWrapper: {
            'data-count': typeof dataCount === 'string' ? dataCount : undefined,
          },
        }}
        hidden={hidden}
        inputElement={
          <ResizableTextArea
            {...rest}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onCompositionStart={onInternalCompositionStart}
            onCompositionEnd={onInternalCompositionEnd}
            className={classNames?.textarea}
            style={{ ...styles?.textarea, resize: style?.resize }}
            disabled={disabled}
            prefixCls={prefixCls}
            onResize={handleResize}
            ref={resizableTextAreaRef}
          />
        }
      />
    );

    return textarea;
  },
);

export default TextArea;
