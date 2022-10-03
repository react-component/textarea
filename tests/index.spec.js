import React from 'react';
import { mount } from 'enzyme';
import { render, act, fireEvent } from '@testing-library/react';
import TextArea from '../src';
import { focusTest } from './utils';
import calculateAutoSizeStyle, {
  calculateNodeStyling,
} from '../src/calculateNodeHeight';
import { _rs as onLibResize } from 'rc-resize-observer/lib/utils/observerUtil';
import { _rs as onEsResize } from 'rc-resize-observer/lib/utils/observerUtil';

focusTest(TextArea);

async function wait() {
  for (let i = 0; i < 20; i += 1) {
    await act(async () => {
      jest.runAllTimers();
      await Promise.resolve();
    });
  }
}

function triggerResize(target) {
  const originGetBoundingClientRect = target.getBoundingClientRect;

  target.getBoundingClientRect = () => ({ width: 510, height: 903 });
  onLibResize([{ target }]);
  onEsResize([{ target }]);

  target.getBoundingClientRect = originGetBoundingClientRect;
}

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
    const onChange = jest.fn();
    const wrapper = mount(<TextArea value="111" onChange={onChange} />);
    expect(wrapper.state('value')).toBe('111');
    wrapper.find('textarea').simulate('change', {
      target: {
        value: '222',
      },
    });
    expect(onChange.mock.calls[0][0].target.value).toBe('222');
  });

  it('should auto calculate height according to content length and autoSize property', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    const onInternalAutoSize = jest.fn();

    const renderDemo = (value = '', autoSize = { minRows: 2, maxRows: 6 }) => (
      <TextArea
        value={value}
        readOnly
        autoSize={autoSize}
        wrap="off"
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
    const wrapper = mount(
      <TextArea
        onKeyDown={fakeHandleKeyDown}
        onPressEnter={fakeHandlePressEnter}
      />,
    );
    /** keyCode 65 is A */
    wrapper.find('textarea').simulate('keydown', { keyCode: 65 });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(1);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(0);

    /** keyCode 13 is Enter */
    wrapper.find('textarea').simulate('keydown', { keyCode: 13 });
    expect(fakeHandleKeyDown).toHaveBeenCalledTimes(2);
    expect(fakeHandlePressEnter).toHaveBeenCalledTimes(1);
  });

  it('should support disabled', () => {
    const wrapper = mount(<TextArea disabled />);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should support maxLength', () => {
    const wrapper = mount(<TextArea maxLength={10} />);
    expect(wrapper.render()).toMatchSnapshot();
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
        'letter-spacing:normal;line-height:normal;padding-top:2px;padding-bottom:2px;font-family:-webkit-small-control;font-weight:;font-size:;font-variant:;text-rendering:auto;text-transform:none;width:;text-indent:0;padding-left:2px;padding-right:2px;border-width:1px;box-sizing:border-box;word-break:',
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
    expect(calculateAutoSizeStyle(wrapper, 1, 1)).toEqual(
      expect.objectContaining({
        height: 2,
        minHeight: 2,
        overflowY: undefined,
        resize: 'none',
      }),
    );
    wrapper.style.boxSizing = 'content-box';
    expect(calculateAutoSizeStyle(wrapper, 1, 1)).toEqual(
      expect.objectContaining({
        height: -4,
        minHeight: -4,
        overflowY: undefined,
        resize: 'none',
      }),
    );
  });

  it('handleKeyDown', () => {
    const onPressEnter = jest.fn();
    const onKeyDown = jest.fn();
    const wrapper = mount(
      <TextArea
        onPressEnter={onPressEnter}
        onKeyDown={onKeyDown}
        aria-label="textarea"
      />,
    );
    wrapper.instance().handleKeyDown({ keyCode: 13 });
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
});
