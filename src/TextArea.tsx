import { BaseInput } from '@rc-component/input';
import { type HolderRef } from '@rc-component/input/lib/BaseInput';
import useCount from '@rc-component/input/lib/hooks/useCount';
import { resolveOnChange } from '@rc-component/input/lib/utils/commonUtils';
import useControlledState from '@rc-component/util/lib/hooks/useControlledState';
import clsx from 'classnames';
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
      showCount,
      count,
      className,
      style,
      disabled,
      hidden,
      classNames,
      styles,
      onResize,
      onClear,
      onPressEnter,
      readOnly,
      autoSize,
      onKeyDown,
      ...rest
    },
    ref,
  ) => {
    const [internalValue, setValue] = useControlledState(
      defaultValue,
      customValue,
    );
    const value = internalValue || '';
    const formatValue =
      value === undefined || value === null ? '' : String(value);

    const [focused, setFocused] = React.useState<boolean>(false);

    const compositionRef = React.useRef(false);

    const [textareaResized, setTextareaResized] = React.useState<boolean>(null);

    // =============================== Ref ================================
    const holderRef = useRef<HolderRef>(null);
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
      nativeElement: holderRef.current?.nativeElement || getTextArea(),
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
      if (getTextArea()?.style.height) {
        setTextareaResized(true);
      }
    };

    const isPureTextArea = !autoSize && !showCount && !allowClear;

    return (
      <BaseInput
        ref={holderRef}
        value={formatValue}
        allowClear={allowClear}
        handleReset={handleReset}
        suffix={suffixNode}
        prefixCls={prefixCls}
        classNames={{
          ...classNames,
          affixWrapper: clsx(classNames?.affixWrapper, {
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
        readOnly={readOnly}
        onClear={onClear}
      >
        <ResizableTextArea
          {...rest}
          autoSize={autoSize}
          maxLength={maxLength}
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
          readOnly={readOnly}
        />
      </BaseInput>
    );
  },
);

export default TextArea;
