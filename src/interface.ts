import type { BaseInputProps, InputProps } from 'rc-input/lib/interface';
import type React from 'react';
import type { CSSProperties } from 'react';

export interface AutoSizeType {
  minRows?: number;
  maxRows?: number;
}

// To compatible with origin usage. We have to wrap this
export interface ResizableTextAreaRef {
  textArea: HTMLTextAreaElement;
}

export type HTMLTextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextAreaProps = Omit<HTMLTextareaProps, 'onResize' | 'value'> & {
  value?: HTMLTextareaProps['value'] | bigint;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  autoSize?: boolean | AutoSizeType;
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onResize?: (size: { width: number; height: number }) => void;
  classNames?: {
    textarea?: string;
    count?: string;
    affixWrapper?: string;
  };
  styles?: {
    textarea?: CSSProperties;
    count?: CSSProperties;
  };
} & Pick<BaseInputProps, 'allowClear' | 'suffix'> &
  Pick<InputProps, 'showCount' | 'count'>;

export type TextAreaRef = {
  resizableTextArea: ResizableTextAreaRef;
  focus: () => void;
  blur: () => void;
};
