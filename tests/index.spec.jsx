import React from 'react';
import { mount } from 'enzyme';
import TextArea from '../src';
import { focusTest, sleep } from './utils';
import calculateNodeHeight, {
  calculateNodeStyling,
} from '../src/calculateNodeHeight';

// focusTest(TextArea);

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

    const wrapper = mount(
      <TextArea
        value=""
        readOnly
        autoSize={{ minRows: 2, maxRows: 6 }}
        wrap="off"
      />,
    );
    const mockFunc = jest.spyOn(
      wrapper.instance().resizableTextArea,
      'resizeTextarea',
    );
    wrapper.setProps({ value: '1111\n2222\n3333' });
    await sleep(0);
    expect(mockFunc).toHaveBeenCalledTimes(1);
    wrapper.setProps({ value: '1111' });
    await sleep(0);
    expect(mockFunc).toHaveBeenCalledTimes(2);

    wrapper.setProps({ autoSize: { minRows: 1, maxRows: 6 } });
    await sleep(0);
    expect(mockFunc).toHaveBeenCalledTimes(3);
    wrapper.setProps({ autoSize: { minRows: 1, maxRows: 6 } });
    await sleep(0);
    expect(mockFunc).toHaveBeenCalledTimes(3);
    wrapper.setProps({ autoSize: { minRows: 1, maxRows: 12 } });
    await sleep(0);
    expect(mockFunc).toHaveBeenCalledTimes(4);

    wrapper.setProps({ autoSize: true });
    await sleep(0);
    expect(mockFunc).toHaveBeenCalledTimes(5);
    wrapper.setProps({ autoSize: false });
    await sleep(0);
    expect(mockFunc).toHaveBeenCalledTimes(6);

    wrapper.update();
    expect(wrapper.find('textarea').props().style.overflow).toBeFalsy();

    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
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
    const { height } = calculateNodeHeight(wrapper);
    expect(height).toBe(2);
  });

  it('boxSizing === "content-box"', () => {
    const wrapper = document.createElement('textarea');
    wrapper.style.boxSizing = 'content-box';
    const { height } = calculateNodeHeight(wrapper);
    expect(height).toBe(-4);
  });

  it('minRows or maxRows is not null', () => {
    const wrapper = document.createElement('textarea');
    expect(calculateNodeHeight(wrapper, 1, 1)).toEqual({
      height: 2,
      maxHeight: 9007199254740991,
      minHeight: 2,
      overflowY: undefined,
      resize: 'none',
    });
    wrapper.style.boxSizing = 'content-box';
    expect(calculateNodeHeight(wrapper, 1, 1)).toEqual({
      height: -4,
      maxHeight: 9007199254740991,
      minHeight: -4,
      overflowY: undefined,
      resize: 'none',
    });
  });

  it('when prop value not in this.props, resizeTextarea should be called', () => {
    const wrapper = mount(<TextArea aria-label="textarea" />);
    const resizeTextarea = jest.spyOn(
      wrapper.instance().resizableTextArea,
      'resizeTextarea',
    );
    wrapper.find('textarea').simulate('change', 'test');
    expect(resizeTextarea).toHaveBeenCalled();
  });

  it('when resizeStatus is not RESIZE_STATUS.NONE, resizeTextarea should be called', async () => {
    const wrapper = mount(<TextArea autoSize />);
    const resizeTextarea = jest.spyOn(
      wrapper.instance().resizableTextArea,
      'resizeTextarea',
    );
    await sleep(100);
    wrapper.setState({
      resizeStatus: 2,
    });
    await sleep(100);
    wrapper.find('ResizeObserver').prop('onResize')(
      {
        width: 100,
        height: 100,
        offsetWidth: 100,
        offsetHeight: 100,
      },
      {},
    );

    expect(resizeTextarea).not.toHaveBeenCalled();
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
    const wrapper = mount(<TextArea onResize={onResize} autoSize />);
    await sleep(100);

    const internalResize = wrapper.find('ResizeObserver').prop('onResize');

    internalResize(
      {
        width: 100,
        height: 100,
        offsetWidth: 100,
        offsetHeight: 100,
      },
      {},
    );
    await Promise.resolve();

    expect(onResize).toHaveBeenCalledWith(
      expect.objectContaining({
        width: expect.any(Number),
        height: expect.any(Number),
      }),
    );
  });

  it('scroll to bottom when autoSize', async () => {
    const wrapper = mount(<TextArea autoSize />, { attachTo: document.body });
    wrapper.find('textarea').simulate('focus');
    wrapper.find('textarea').getDOMNode().focus();
    const setSelectionRangeFn = jest.spyOn(
      wrapper.find('textarea').getDOMNode(),
      'setSelectionRange',
    );
    wrapper.find('textarea').simulate('change', { target: { value: '\n1' } });
    await sleep(100);
    expect(setSelectionRangeFn).toHaveBeenCalled();
    wrapper.unmount();
  });
});
