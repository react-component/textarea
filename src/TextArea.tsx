import clsx from 'classnames';
import { BaseInput } from 'rc-input';
import useCount from 'rc-input/lib/hooks/useCount';
import { resolveOnChange } from 'rc-input/lib/utils/commonUtils';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import type { ReactNode } from 'react';
import React, { useEffect, useImperativeHandle, useRef } from 'react';
import ResizableTextArea from './ResizableTextArea';
import type {
  ResizableTextAreaRef,
  TextAreaProps,
  TextAreaRef,
} from './interface';

// function fixEmojiLength(value: string, maxLength: number) {
//   return [...(value || '')].slice(0, maxLength).join('');
// }

// function setTriggerValue(
//   isCursorInEnd: boolean,
//   preValue: string,
//   triggerValue: string,
//   maxLength: number,
// ) {
//   let newTriggerValue = triggerValue;
//   if (isCursorInEnd) {
//     // 光标在尾部，直接截断
//     newTriggerValue = fixEmojiLength(triggerValue, maxLength!);
//   } else if (
//     [...(preValue || '')].length < triggerValue.length &&
//     [...(triggerValue || '')].length > maxLength!
//   ) {
//     // 光标在中间，如果最后的值超过最大值，则采用原先的值
//     newTriggerValue = preValue;
//   }
//   return newTriggerValue;
// }

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
      count,
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
    const formatValue =
      value === undefined || value === null ? '' : String(value);

    const resizableTextAreaRef = useRef<ResizableTextAreaRef>(null);

    const [focused, setFocused] = React.useState<boolean>(false);

    const [compositing, setCompositing] = React.useState(false);
    const compositionRef = React.useRef(false);

    const oldCompositionValueRef = React.useRef<string>();
    const oldSelectionStartRef = React.useRef<number>(0);
    const [textareaResized, setTextareaResized] = React.useState<boolean>(null);

    const focus = () => {
      resizableTextAreaRef.current?.textArea.focus();
    };

    useImperativeHandle(ref, () => ({
      resizableTextArea: resizableTextAreaRef.current,
      focus,
      blur: () => {
        resizableTextAreaRef.current?.textArea.blur();
      },
    }));

    useEffect(() => {
      setFocused((prev) => !disabled && prev);
    }, [disabled]);

    // ============================== Count ===============================
    const countConfig = useCount(count, showCount);
    const mergedMax = countConfig.max ?? maxLength;

    // Max length value
    const hasMaxLength = Number(mergedMax) > 0;

    const valueLength = countConfig.strategy(formatValue);

    const isOutOfRange = !!mergedMax && valueLength > mergedMax;

    // ============================== Change ==============================
    const triggerChange = (
      e:
        | React.ChangeEvent<HTMLTextAreaElement>
        | React.CompositionEvent<HTMLTextAreaElement>,
      currentValue: string,
    ) => {
      let cutValue = currentValue;

      if (
        !compositionRef.current &&
        countConfig.exceedFormatter &&
        countConfig.max &&
        countConfig.strategy(currentValue) > countConfig.max
      ) {
        cutValue = countConfig.exceedFormatter(currentValue, {
          max: countConfig.max,
        });
      }
      setValue(cutValue);

      resolveOnChange(e.currentTarget, e, onChange, cutValue);
    };

    // =========================== Value Update ===========================
    const onInternalCompositionStart: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (e) => {
      // setCompositing(true);
      // // 拼音输入前保存一份旧值
      // oldCompositionValueRef.current = value as string;
      // // 保存旧的光标位置
      // oldSelectionStartRef.current = e.currentTarget.selectionStart;
      compositionRef.current = true;
      onCompositionStart?.(e);
    };

    const onInternalCompositionEnd: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (e) => {
      // setCompositing(false);

      // let triggerValue = e.currentTarget.value;
      // if (hasMaxLength) {
      //   const isCursorInEnd =
      //     oldSelectionStartRef.current >= maxLength! + 1 ||
      //     oldSelectionStartRef.current ===
      //       oldCompositionValueRef.current?.length;
      //   triggerValue = setTriggerValue(
      //     isCursorInEnd,
      //     oldCompositionValueRef.current as string,
      //     triggerValue,
      //     maxLength!,
      //   );
      // }
      // // Patch composition onChange when value changed
      // if (triggerValue !== value) {
      //   setValue(triggerValue);
      //   resolveOnChange(e.currentTarget, e, onChange, triggerValue);
      // }

      compositionRef.current = false;
      triggerChange(e, e.currentTarget.value);
      onCompositionEnd?.(e);
    };

    const onInternalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // let triggerValue = e.target.value;
      // if (!compositing && hasMaxLength) {
      //   // 1. 复制粘贴超过maxlength的情况 2.未超过maxlength的情况
      //   const isCursorInEnd =
      //     e.target.selectionStart >= maxLength! + 1 ||
      //     e.target.selectionStart === triggerValue.length ||
      //     !e.target.selectionStart;
      //   triggerValue = setTriggerValue(
      //     isCursorInEnd,
      //     value as string,
      //     triggerValue,
      //     maxLength!,
      //   );
      // }
      // setValue(triggerValue);
      // resolveOnChange(e.currentTarget, e, onChange, triggerValue);
      triggerChange(e, e.target.value);
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
      resolveOnChange(resizableTextAreaRef.current?.textArea, e, onChange);
    };

    // let val = value === null || value === undefined ? '' : String(value);

    // if (
    //   !compositing &&
    //   hasMaxLength &&
    //   (customValue === null || customValue === undefined)
    // ) {
    //   // fix #27612 将value转为数组进行截取，解决 '😂'.length === 2 等emoji表情导致的截取乱码的问题
    //   val = fixEmojiLength(val, maxLength!);
    // }

    let suffixNode = suffix;
    let dataCount: ReactNode;
    if (countConfig.show) {
      if (countConfig.showFormatter) {
        dataCount = countConfig.showFormatter({
          value: formatValue,
          count: valueLength,
          maxLength: mergedMax,
        });
      } else {
        dataCount = `${valueLength}${hasMaxLength ? ` / ${mergedMax}` : ''}`;
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
      if (resizableTextAreaRef.current?.textArea.style.height) {
        setTextareaResized(true);
      }
    };

    const isPureTextArea = !rest.autoSize && !showCount && !allowClear;

    const textarea = (
      <BaseInput
        value={formatValue}
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
        className={clsx(className, isOutOfRange && `${prefixCls}-out-of-range`)}
        style={{
          ...style,
          ...(textareaResized && !isPureTextArea ? { height: 'auto' } : {}),
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
            onChange={onInternalChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onCompositionStart={onInternalCompositionStart}
            onCompositionEnd={onInternalCompositionEnd}
            className={clsx(classNames?.textarea)}
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
