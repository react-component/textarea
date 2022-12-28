import type React from 'react';

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

export interface TextAreaProps extends Omit<HTMLTextareaProps, 'onResize'> {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  autoSize?: boolean | AutoSizeType;
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onResize?: (size: { width: number; height: number }) => void;
}

export type TextAreaRef = {
  resizableTextArea: ResizableTextAreaRef;
  focus: () => void;
  blur: () => void;
};
