import type { BaseInputProps, ShowCountProps } from 'rc-input/lib/interface';
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

export type TextAreaProps = Omit<HTMLTextareaProps, 'onResize'> & {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  autoSize?: boolean | AutoSizeType;
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onResize?: (size: { width: number; height: number }) => void;
  showCount?: boolean | ShowCountProps;
} & Pick<BaseInputProps, 'allowClear' | 'suffix' | 'affixWrapperClassName'>;

export type TextAreaRef = {
  resizableTextArea: ResizableTextAreaRef;
  focus: () => void;
  blur: () => void;
};
