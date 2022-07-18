import type { TextAreaProps as InternalTextAreaProps } from './TextArea';
import InternalTextArea from './TextArea';
import { BaseInput } from 'rc-input';
import React, { forwardRef } from 'react';
import type { CommonInputProps } from 'rc-input/es/interface';
import classNames from 'classnames';

export type TextAreaProps = InternalTextAreaProps &
  Pick<
    CommonInputProps,
    'allowClear' | 'affixWrapperClassName' | 'inputClassName'
  > & {
    showCount?: boolean;
  };

const TextArea = forwardRef<InternalTextArea, TextAreaProps>((props, ref) => {
  const {
    allowClear,
    affixWrapperClassName,
    prefixCls = 'rc-textarea',
    ...rest
  } = props;

  const affixWrapperCls = classNames(affixWrapperClassName, {
    [`${prefixCls}-affix-wrapper-textarea-with-clear-btn`]: allowClear,
  });

  return (
    <BaseInput
      {...rest}
      prefixCls={prefixCls}
      allowClear={allowClear}
      affixWrapperClassName={affixWrapperCls}
      inputElement={
        <InternalTextArea ref={ref} {...rest} prefixCls={prefixCls} />
      }
    />
  );
});

export default TextArea;
