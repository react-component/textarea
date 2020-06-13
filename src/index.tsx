import * as React from 'react';
import ResizableTextArea, { AutoSizeType } from './ResizableTextArea';

export type HTMLTextareaProps = React.TextareaHTMLAttributes<
  HTMLTextAreaElement
>;

export interface TextAreaProps extends HTMLTextareaProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  autoSize?: boolean | AutoSizeType;
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onResize?: (size: { width: number; height: number }) => void;
}

export interface TextAreaState {
  value: any;
}

class TextArea extends React.Component<TextAreaProps, TextAreaState> {
  resizableTextArea!: ResizableTextArea;

  constructor(props: TextAreaProps) {
    super(props);
    const value =
      typeof props.value === 'undefined' || props.value === null
        ? props.defaultValue
        : props.value;
    this.state = {
      value,
    };
  }

  static getDerivedStateFromProps(nextProps: TextAreaProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value,
      };
    }
    return null;
  }

  setValue(value: string, callback?: () => void) {
    if (!('value' in this.props)) {
      this.setState({ value }, callback);
    }
  }

  focus = () => {
    this.resizableTextArea.textArea.focus();
  };

  blur() {
    this.resizableTextArea.textArea.blur();
  }

  saveTextArea = (resizableTextArea: ResizableTextArea) => {
    this.resizableTextArea = resizableTextArea;
  };

  handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange } = this.props;
    this.setValue(e.target.value, () => {
      this.resizableTextArea.resizeTextarea();
    });
    if (onChange) {
      onChange(e);
    }
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const { onPressEnter, onKeyDown } = this.props;
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  render() {
    return (
      <ResizableTextArea
        {...this.props}
        value={this.state.value}
        onKeyDown={this.handleKeyDown}
        onChange={this.handleChange}
        ref={this.saveTextArea}
      />
    );
  }
}

export { ResizableTextArea, AutoSizeType };

export default TextArea;
