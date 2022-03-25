import * as React from 'react';
import ResizeObserver from 'rc-resize-observer';
import omit from 'rc-util/lib/omit';
import classNames from 'classnames';
import calculateNodeHeight from './calculateNodeHeight';
import type { TextAreaProps } from '.';
import shallowEqual from 'shallowequal';

// eslint-disable-next-line @typescript-eslint/naming-convention
enum RESIZE_STATUS {
  NONE,
  RESIZING,
  RESIZED,
}

export interface AutoSizeType {
  minRows?: number;
  maxRows?: number;
}

export interface TextAreaState {
  textareaStyles?: React.CSSProperties;
  /** We need add process style to disable scroll first and then add back to avoid unexpected scrollbar  */
  resizeStatus?: RESIZE_STATUS;
}

class ResizableTextArea extends React.Component<TextAreaProps, TextAreaState> {
  nextFrameActionId!: number;

  resizeFrameId!: number;

  constructor(props: TextAreaProps) {
    super(props);
    this.state = {
      textareaStyles: {},
      resizeStatus: RESIZE_STATUS.NONE,
    };
  }

  textArea!: HTMLTextAreaElement;

  saveTextArea = (textArea: HTMLTextAreaElement) => {
    this.textArea = textArea;
  };

  componentDidMount(): void {
    this.resizeTextarea();
  }

  componentDidUpdate(prevProps: TextAreaProps) {
    // Re-render with the new content or new autoSize property then recalculate the height as required.
    if (
      prevProps.value !== this.props.value ||
      !shallowEqual(prevProps.autoSize, this.props.autoSize)
    ) {
      this.resizeTextarea();
    }
  }

  handleResize = (size: { width: number; height: number }) => {
    const { resizeStatus } = this.state;
    const { autoSize, onResize } = this.props;
    if (resizeStatus !== RESIZE_STATUS.NONE) {
      return;
    }

    if (typeof onResize === 'function') {
      onResize(size);
    }
    if (autoSize) {
      this.resizeOnNextFrame();
    }
  };

  resizeOnNextFrame = () => {
    cancelAnimationFrame(this.nextFrameActionId);
    this.nextFrameActionId = requestAnimationFrame(this.resizeTextarea);
  };

  resizeTextarea = () => {
    const { autoSize } = this.props;
    if (!autoSize || !this.textArea) {
      return;
    }
    const { minRows, maxRows } = autoSize as AutoSizeType;
    const textareaStyles = calculateNodeHeight(
      this.textArea,
      false,
      minRows,
      maxRows,
    );
    this.setState(
      { textareaStyles, resizeStatus: RESIZE_STATUS.RESIZING },
      () => {
        cancelAnimationFrame(this.resizeFrameId);
        this.resizeFrameId = requestAnimationFrame(() => {
          this.setState({ resizeStatus: RESIZE_STATUS.RESIZED }, () => {
            this.resizeFrameId = requestAnimationFrame(() => {
              this.setState({ resizeStatus: RESIZE_STATUS.NONE });
              this.fixFirefoxAutoScroll();
            });
          });
        });
      },
    );
  };

  componentWillUnmount() {
    cancelAnimationFrame(this.nextFrameActionId);
    cancelAnimationFrame(this.resizeFrameId);
  }

  // https://github.com/ant-design/ant-design/issues/21870
  fixFirefoxAutoScroll() {
    try {
      if (document.activeElement === this.textArea) {
        const currentStart = this.textArea.selectionStart;
        const currentEnd = this.textArea.selectionEnd;
        this.textArea.setSelectionRange(currentStart, currentEnd);
      }
    } catch (e) {
      // Fix error in Chrome:
      // Failed to read the 'selectionStart' property from 'HTMLInputElement'
      // http://stackoverflow.com/q/21177489/3040605
    }
  }

  renderTextArea = () => {
    const {
      prefixCls = 'rc-textarea',
      autoSize,
      onResize,
      className,
      disabled,
    } = this.props;
    const { textareaStyles, resizeStatus } = this.state;
    const otherProps: any = omit(this.props, [
      'prefixCls',
      'onPressEnter',
      'autoSize',
      'defaultValue',
      'onResize',
    ]);
    const cls = classNames(prefixCls, className, {
      [`${prefixCls}-disabled`]: disabled,
    });
    // Fix https://github.com/ant-design/ant-design/issues/6776
    // Make sure it could be reset when using form.getFieldDecorator
    if ('value' in otherProps) {
      otherProps.value = otherProps.value || '';
    }
    const style: React.CSSProperties = {
      ...this.props.style,
      ...textareaStyles,
      ...(resizeStatus === RESIZE_STATUS.RESIZING
        ? // React will warning when mix `overflow` & `overflowY`.
          // We need to define this separately.
          { overflowX: 'hidden', overflowY: 'hidden' }
        : null),
    };
    return (
      <ResizeObserver
        onResize={this.handleResize}
        disabled={!(autoSize || onResize)}
      >
        <textarea
          {...otherProps}
          className={cls}
          style={style}
          ref={this.saveTextArea}
        />
      </ResizeObserver>
    );
  };

  render() {
    return this.renderTextArea();
  }
}

export default ResizableTextArea;
