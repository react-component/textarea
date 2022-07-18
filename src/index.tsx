import type { TextAreaProps as InternalTextAreaProps } from './TextArea';
import InternalTextArea from './TextArea';
import { BaseInput } from 'rc-input';
import React, { forwardRef, useRef } from 'react';
import type { CommonInputProps } from 'rc-input/es/interface';
import classNames from 'classnames';
import useMergedState from 'rc-util/es/hooks/useMergedState';
import {
  fixControlledValue,
  resolveOnChange,
} from 'rc-input/es/utils/commonUtils';

export type TextAreaProps = InternalTextAreaProps &
  Pick<
    CommonInputProps,
    'allowClear' | 'affixWrapperClassName' | 'inputClassName'
  > & {
    showCount?: boolean;
  };

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

const TextArea = forwardRef<InternalTextArea, TextAreaProps>((props, ref) => {
  const {
    allowClear,
    affixWrapperClassName,
    prefixCls = 'rc-textarea',
    onCompositionStart,
    onCompositionEnd,
    maxLength,
    onChange,
    ...rest
  } = props;

  const [value, setValue] = useMergedState(props.defaultValue, {
    value: props.value,
  });

  const innerRef = useRef<InternalTextArea>(null);

  const [compositing, setCompositing] = React.useState(false);
  const oldCompositionValueRef = React.useRef<string>();
  const oldSelectionStartRef = React.useRef<number>(0);

  const handleSetValue = (val: string, callback?: () => void) => {
    if (props.value === undefined) {
      setValue(val);
      callback?.();
    }
  };

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
        oldSelectionStartRef.current === oldCompositionValueRef.current?.length;
      triggerValue = setTriggerValue(
        isCursorInEnd,
        oldCompositionValueRef.current as string,
        triggerValue,
        maxLength!,
      );
    }
    // Patch composition onChange when value changed
    if (triggerValue !== value) {
      handleSetValue(triggerValue);
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
    handleSetValue(triggerValue);
    resolveOnChange(e.currentTarget, e, onChange, triggerValue);
  };

  // ============================== Reset ===============================
  const handleReset = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    handleSetValue('');
    innerRef.current?.focus();
    resolveOnChange(innerRef.current?.resizableTextArea?.textArea, e, onChange);
  };

  const affixWrapperCls = classNames(affixWrapperClassName, {
    [`${prefixCls}-affix-wrapper-textarea-with-clear-btn`]: allowClear,
  });

  return (
    <BaseInput
      {...rest}
      prefixCls={prefixCls}
      allowClear={allowClear}
      affixWrapperClassName={affixWrapperCls}
      handleReset={handleReset}
      inputElement={
        <InternalTextArea
          ref={innerRef}
          {...rest}
          prefixCls={prefixCls}
          onChange={handleChange}
          onCompositionEnd={onInternalCompositionEnd}
          onCompositionStart={onInternalCompositionStart}
        />
      }
      value={fixControlledValue(value)}
    />
  );
});

export default TextArea;
