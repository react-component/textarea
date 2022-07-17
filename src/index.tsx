import type { TextAreaProps as InternalTextAreaProps } from './TextArea';
import InternalTextArea from './TextArea';
import { BaseInput } from 'rc-input';
import React, { forwardRef } from 'react';
import type { CommonInputProps } from 'rc-input/es/interface';

export type TextAreaProps = CommonInputProps &
  InternalTextAreaProps & {
    showCount?: boolean;
  };

const TextArea = forwardRef<InternalTextArea, TextAreaProps>((props, ref) => {
  return (
    <BaseInput
      {...props}
      inputElement={<InternalTextArea ref={ref} {...props} />}
    />
  );
});

export default TextArea;
