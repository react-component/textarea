import ResizableTextArea from './ResizableTextArea';
import type {
  ResizableTextAreaRef,
  TextAreaProps,
  TextAreaRef,
} from './interface';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import React, { useImperativeHandle, useRef } from 'react';

const TextArea = React.forwardRef<TextAreaRef, TextAreaProps>(
  ({ defaultValue, value: customValue, onChange, ...rest }, ref) => {
    const [value, setValue] = useMergedState(defaultValue, {
      value: customValue,
      defaultValue,
    });
    const resizableTextAreaRef = useRef<ResizableTextAreaRef>(null);

    useImperativeHandle(ref, () => ({
      resizableTextArea: resizableTextAreaRef.current,
      focus: () => {
        resizableTextAreaRef.current.textArea.focus();
      },
      blur: () => {
        resizableTextAreaRef.current.textArea.blur();
      },
    }));

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      onChange?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      const { onPressEnter, onKeyDown } = rest;
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };

    return (
      <ResizableTextArea
        {...rest}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        ref={resizableTextAreaRef}
      />
    );
  },
);

export default TextArea;
