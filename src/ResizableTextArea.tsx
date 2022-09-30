import * as React from 'react';
import ResizeObserver from 'rc-resize-observer';
import useLayoutEffect from 'rc-util/lib/hooks/useLayoutEffect';
import raf from 'rc-util/lib/raf';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import classNames from 'classnames';
import calculateAutoSizeStyle from './calculateNodeHeight';
import type { TextAreaProps } from '.';

const RESIZE_START = 0;
const RESIZE_MEASURING = 1;
const RESIZE_STABLE = 2;

export interface AutoSizeType {
  minRows?: number;
  maxRows?: number;
}

// To compatible with origin usage. We have to wrap this
export interface ResizableTextAreaRef {
  textArea: HTMLTextAreaElement;
}

const ResizableTextArea = React.forwardRef<ResizableTextAreaRef, TextAreaProps>(
  (props, ref) => {
    const {
      prefixCls,
      onPressEnter,
      defaultValue,
      value,
      autoSize,
      onResize,
      className,
      style,
      disabled,
      onChange,
      ...restProps
    } = props;

    // =============================== Value ================================
    const [mergedValue, setMergedValue] = useMergedState(defaultValue, {
      value,
      postState: (val) => val ?? '',
    });

    const onInternalChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
      event,
    ) => {
      setMergedValue(event.target.value);
      onChange?.(event);
    };

    // ================================ Ref =================================
    const textareaRef = React.useRef<HTMLTextAreaElement>();

    React.useImperativeHandle(ref, () => ({
      textArea: textareaRef.current,
    }));

    // ============================== AutoSize ==============================
    const [minRows, maxRows] = React.useMemo(() => {
      if (autoSize && typeof autoSize === 'object') {
        return [autoSize.minRows, autoSize.maxRows];
      }

      return [];
    }, [autoSize]);

    const needAutoSize = !!autoSize;

    // =============================== Resize ===============================
    const [resizeState, setResizeState] = React.useState(RESIZE_STABLE);
    const [autoSizeStyle, setAutoSizeStyle] =
      React.useState<React.CSSProperties>();

    // Change to trigger resize measure
    useLayoutEffect(() => {
      if (needAutoSize) {
        setResizeState(RESIZE_START);
      }
    }, [value, minRows, maxRows, needAutoSize]);

    useLayoutEffect(() => {
      if (resizeState === RESIZE_START) {
        setResizeState(RESIZE_MEASURING);
      } else if (resizeState === RESIZE_MEASURING) {
        const textareaStyles = calculateAutoSizeStyle(
          textareaRef.current,
          false,
          minRows,
          maxRows,
        );

        // Safari has bug that text will keep break line on text cut when it's prev is break line.
        const { value: tmpValue } = textareaRef.current;
        textareaRef.current.value = '';
        textareaRef.current.value = tmpValue;

        setResizeState(RESIZE_STABLE);
        setAutoSizeStyle(textareaStyles);
      }
    }, [resizeState]);

    // We lock resize trigger by raf to avoid Safari warning
    const resizeRafRef = React.useRef<number>();
    const cleanRaf = () => {
      raf.cancel(resizeRafRef.current);
    };

    const onInternalResize = (size: { width: number; height: number }) => {
      if (resizeState !== RESIZE_STABLE) {
        return;
      }

      onResize?.(size);

      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = raf(() => {
          setResizeState(RESIZE_START);
        });
      }
    };

    React.useEffect(() => cleanRaf, []);

    // =============================== Render ===============================
    const mergedStyle = {
      ...style,
      ...autoSizeStyle,
    };

    if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
      mergedStyle.overflowY = 'hidden';
      mergedStyle.overflowX = 'hidden';
    }

    return (
      <ResizeObserver
        onResize={onInternalResize}
        disabled={!(autoSize || onResize)}
      >
        <textarea
          {...restProps}
          ref={textareaRef}
          style={mergedStyle}
          className={classNames(prefixCls, className, {
            [`${prefixCls}-disabled`]: disabled,
          })}
          disabled={disabled}
          value={mergedValue}
          onChange={onInternalChange}
        />
      </ResizeObserver>
    );
  },
);

export default ResizableTextArea;
