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

    const [focused, setFocused] = React.useState<boolean>(false);

    const [compositing, setCompositing] = React.useState(false);
    const compositionRef = React.useRef(false);

    const oldCompositionValueRef = React.useRef<string>();
    const oldSelectionStartRef = React.useRef<number>(0);
    const [textareaResized, setTextareaResized] = React.useState<boolean>(null);

    // =============================== Ref ================================
    const resizableTextAreaRef = useRef<ResizableTextAreaRef>(null);
    const getTextArea = () => resizableTextAreaRef.current?.textArea;

    const focus = () => {
      getTextArea().focus();
    };

    useImperativeHandle(ref, () => ({
      resizableTextArea: resizableTextAreaRef.current,
      focus,
      blur: () => {
        getTextArea().blur();
      },
    }));

    useEffect(() => {
      setFocused((prev) => !disabled && prev);
    }, [disabled]);

    // =========================== Select Range ===========================
    const [selection, setSelection] = React.useState<
      [start: number, end: number] | null
    >(null);

    React.useEffect(() => {
      if (selection) {
        getTextArea().setSelectionRange(...selection);
      }
    }, [selection]);

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

        if (currentValue !== cutValue) {
          setSelection([
            getTextArea().selectionStart || 0,
            getTextArea().selectionEnd || 0,
          ]);
        }
      }
      setValue(cutValue);

      resolveOnChange(e.currentTarget, e, onChange, cutValue);
    };

    // =========================== Value Update ===========================
    const onInternalCompositionStart: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (e) => {
      compositionRef.current = true;
      onCompositionStart?.(e);
    };

    const onInternalCompositionEnd: React.CompositionEventHandler<
      HTMLTextAreaElement
    > = (e) => {
      compositionRef.current = false;
      triggerChange(e, e.currentTarget.value);
      onCompositionEnd?.(e);
    };

    const onInternalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      resolveOnChange(getTextArea(), e, onChange);
    };

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
      if (getTextArea().style.height) {
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
