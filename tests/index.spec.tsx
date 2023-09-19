import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import type { TextAreaProps } from '../src';
import TextArea from '../src';
import calculateAutoSizeStyle, {
  calculateNodeStyling,
} from '../src/calculateNodeHeight';
import { triggerResize, wait } from './utils';

describe('TextArea', () => {
  const originalGetComputedStyle = window.getComputedStyle;
  beforeAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: (node) => ({
        getPropertyValue: (prop) => {
          if (prop === 'box-sizing') {
            return originalGetComputedStyle(node)[prop] || 'border-box';
          }
          return originalGetComputedStyle(node)[prop];
        },
      }),
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'getComputedStyle', {
      value: originalGetComputedStyle,
    });
  });

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  it('should work correctly on controlled mode', () => {
    const Demo = () => {
      const [value, setValue] = React.useState('111');
      return (
        <TextArea
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      );
    };
    const { container } = render(<Demo />);
    const textarea = container.querySelector('textarea');
    expect(textarea.value).toBe('111');
    fireEvent.change(textarea, {
      target: {
        value: '222',
      },
    });
    expect(textarea.value).toBe('222');
  });

  it('should auto calculate height according to content length and autoSize property', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const onInternalAutoSize = jest.fn();

    const renderDemo = (
      value = '',
      autoSize: TextAreaProps['autoSize'] = { minRows: 2, maxRows: 6 },
    ) => (
      <TextArea
        value={value}
        readOnly
        autoSize={autoSize}
        wrap="off"
        // @ts-ignore
        onInternalAutoSize={onInternalAutoSize}
      />
    );

    const { container, rerender } = render(renderDemo());

    await wait();
    onInternalAutoSize.mockRestore();

    rerender(renderDemo('1111\n2222\n3333'));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(1);

    rerender(renderDemo('1111'));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(2);

    rerender(renderDemo('1111', { minRows: 1, maxRows: 6 }));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(3);

    rerender(renderDemo('1111', { minRows: 1, maxRows: 6 }));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(3);

    rerender(renderDemo('1111', { minRows: 1, maxRows: 12 }));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(4);

    rerender(renderDemo('1111', true));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(5);

    rerender(renderDemo('1111', false));
    await wait();
    expect(onInternalAutoSize).toHaveBeenCalledTimes(5);

    expect(container.querySelector('textarea')).not.toHaveStyle({
      overflowY: 'hidden',
    });

    expect(errorSpy).not.toHaveBeenCalled();
  });

  it('should support onPressEnter and onKeyDown', () => {
    const fakeHandleKeyDown = jest.fn();
    const fakeHandlePressEnter = jest.fn();
    const { container } = render(
      <TextArea
        onKeyDown={fakeHandleKeyDown}
        onPressEnter={fakeHandlePressEnter}
      />,
    );
    const textarea = container.querySelector('textarea');
    /** keyCode 65 is A */
    fireEvent.keyDown(textarea, { keyCode: 65 });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(1);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(0);

    /** keyCode 13 is Enter */
    fireEvent.keyDown(textarea, { keyCode: 13 });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(2);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(1);
  });

  it('should support disabled', () => {
    const { container } = render(<TextArea disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should support maxLength', () => {
    const { container } = render(<TextArea maxLength={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('calculateNodeStyling works correctly', () => {
    const wrapper = document.createElement('textarea');
    wrapper.id = 'test';
    wrapper.wrap = 'wrap';
    calculateNodeStyling(wrapper, true);
    const value = calculateNodeStyling(wrapper, true);
    expect(value).toEqual({
      borderSize: 2,
      boxSizing: 'border-box',
      paddingSize: 4,
      sizingStyle:
        'letter-spacing:normal;line-height:normal;padding-top:2px;padding-bottom:2px;font-family:-webkit-small-control;font-weight:;font-size:;font-variant:;text-rendering:auto;text-transform:none;width:;text-indent:0;padding-left:2px;padding-right:2px;border-width:1px;box-sizing:border-box;word-break:;white-space:pre-wrap',
    });
  });

  it('boxSizing === "border-box"', () => {
    const wrapper = document.createElement('textarea');
    wrapper.style.boxSizing = 'border-box';
    const { height } = calculateAutoSizeStyle(wrapper);
    expect(height).toBe(2);
  });

  it('boxSizing === "content-box"', () => {
    const wrapper = document.createElement('textarea');
    wrapper.style.boxSizing = 'content-box';
    const { height } = calculateAutoSizeStyle(wrapper);
    expect(height).toBe(-4);
  });

  it('minRows or maxRows is not null', () => {
    const wrapper = document.createElement('textarea');
    expect(calculateAutoSizeStyle(wrapper, false, 1, 1)).toEqual(
      expect.objectContaining({
        height: 2,
        minHeight: 2,
        overflowY: 'hidden',
        resize: 'none',
      }),
    );
    wrapper.style.boxSizing = 'content-box';
    expect(calculateAutoSizeStyle(wrapper, false, 1, 1)).toEqual(
      expect.objectContaining({
        height: -4,
        minHeight: -4,
        overflowY: 'hidden',
        resize: 'none',
      }),
    );
  });

  it('handleKeyDown', () => {
    const onPressEnter = jest.fn();
    const onKeyDown = jest.fn();
    const { container } = render(
      <TextArea
        onPressEnter={onPressEnter}
        onKeyDown={onKeyDown}
        aria-label="textarea"
      />,
    );
    fireEvent.keyDown(container.querySelector('textarea'), { keyCode: 13 });
    expect(onPressEnter).toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
  });

  it('should trigger onResize', async () => {
    const onResize = jest.fn();
    const { container } = render(<TextArea onResize={onResize} autoSize />);
    await wait();

    triggerResize(container.querySelector('textarea'));
    await wait();

    expect(onResize).toHaveBeenCalledWith(
      expect.objectContaining({
        width: expect.any(Number),
        height: expect.any(Number),
      }),
    );
  });

  it('scroll to bottom when autoSize', async () => {
    const { container, unmount } = render(<TextArea autoSize />);
    container.querySelector('textarea').focus();
    expect(document.activeElement).toBe(container.querySelector('textarea'));

    const setSelectionRangeFn = jest.spyOn(
      container.querySelector('textarea'),
      'setSelectionRange',
    );

    fireEvent.change(container.querySelector('textarea'), {
      target: { value: '\n1' },
    });

    await wait();

    expect(setSelectionRangeFn).toHaveBeenCalled();
    unmount();
  });

  it('should support onPressEnter and onKeyDown', () => {
    const fakeHandleKeyDown = jest.fn();
    const fakeHandlePressEnter = jest.fn();
    const { container } = render(
      <TextArea
        onKeyDown={fakeHandleKeyDown}
        onPressEnter={fakeHandlePressEnter}
      />,
    );
    /** KeyCode 65 is A */
    fireEvent.keyDown(container.querySelector('textarea')!, { key: 'A' });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(1);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(0);

    /** KeyCode 13 is Enter */
    fireEvent.keyDown(container.querySelector('textarea')!, { key: 'Enter' });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(2);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(1);
  });

  // 字符输入
  it('should not cut off string when cursor position is not at the end', () => {
    const onChange = jest.fn();
    const { container } = render(
      <TextArea maxLength={6} defaultValue="123456" onChange={onChange} />,
    );
    fireEvent.change(container.querySelector('textarea')!, {
      target: { selectionStart: 1, value: 'w123456' },
    });
    fireEvent.change(container.querySelector('textarea')!, {
      target: { selectionStart: 3, value: 'w123456' },
    });
    expect(container.querySelector('textarea')?.value).toBe('123456');
  });

  // 拼音输入
  // 1. 光标位于最后，且当前字符数未达到6个，若选中的字符 + 原字符的长度超过6个，则将最终的字符按照maxlength截断
  it('when the input method is pinyin and the cursor is at the end, should use maxLength to crop', () => {
    const onChange = jest.fn();
    const { container } = render(
      <TextArea maxLength={6} defaultValue="1234" onChange={onChange} />,
    );
    fireEvent.change(container.querySelector('textarea')!, {
      target: { selectionStart: 4, value: '1234' },
    });
    fireEvent.compositionStart(container.querySelector('textarea')!);

    fireEvent.change(container.querySelector('textarea')!, {
      target: { selectionStart: 9, value: '1234z z z' },
    });
    fireEvent.change(container.querySelector('textarea')!, {
      target: { selectionStart: 7, value: '1234组织者' },
    });

    fireEvent.compositionEnd(container.querySelector('textarea')!);

    expect(container.querySelector('textarea')?.value).toBe('1234组织');
  });

  // 2. 光标位于中间或开头，且当前字符数未达到6个，若选中的字符 + 原字符的长度超过6个，则显示原有字符
  it('when the input method is Pinyin and the cursor is in the middle, should display the original string', () => {
    const onChange = jest.fn();
    const { container } = render(
      <TextArea maxLength={6} defaultValue="1234" onChange={onChange} />,
    );
    fireEvent.change(container.querySelector('textarea')!, {
      target: { selectionStart: 2, value: '1234' },
    });
    fireEvent.compositionStart(container.querySelector('textarea')!);

    fireEvent.change(container.querySelector('textarea')!, {
      target: { selectionStart: 2, value: '12z z z34' },
    });
    fireEvent.change(container.querySelector('textarea')!, {
      target: { selectionStart: 5, value: '12组织者34' },
    });

    fireEvent.compositionEnd(container.querySelector('textarea')!);

    expect(container.querySelector('textarea')?.value).toBe('1234');
  });

  it('classNames and styles should work', () => {
    const { container } = render(
      <>
        <TextArea
          className="custom-class"
          style={{ background: 'red' }}
          classNames={{
            textarea: 'custom-textarea',
            count: 'custom-count',
          }}
          styles={{
            textarea: {
              color: 'red',
            },
            count: {
              color: 'blue',
            },
          }}
        />
        <TextArea
          showCount
          className="custom-class"
          style={{ background: 'red' }}
          classNames={{
            textarea: 'custom-textarea',
            count: 'custom-count',
          }}
          styles={{
            textarea: {
              color: 'red',
            },
            count: {
              color: 'blue',
            },
          }}
        />
      </>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should be resized with textarea', async () => {
    const onResize = jest.fn();
    const { container } = render(
      <TextArea onResize={onResize} showCount style={{ height: 200 }} />,
    );
    await wait();
    expect(
      (container.querySelector('.rc-textarea-affix-wrapper') as HTMLDivElement)
        .style.height,
    ).toBe('200px');

    triggerResize(container.querySelector('textarea'), { height: 1000 });
    await wait();
    expect(onResize).toHaveBeenCalledTimes(1);
    expect(
      (container.querySelector('.rc-textarea-affix-wrapper') as HTMLDivElement)
        .style.height,
    ).toBe('auto');
  });

  it('pass style height should work', async () => {
    const onResize = jest.fn();

    const { container } = render(
      <TextArea onResize={onResize} style={{ height: 93 }} />,
    );

    triggerResize(container.querySelector('textarea'));
    await wait();

    expect(onResize).toHaveBeenCalled();

    expect(container.querySelector('textarea')).toHaveStyle({
      height: '903px',
    });
  });

  it('support bigint type', () => {
    const { container } = render(<TextArea value={BigInt('903')} autoSize />);
    expect(container.querySelector('textarea').value).toBe('903');
  });
});
