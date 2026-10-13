import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import type { ResizableTextAreaRef, TextAreaProps } from '../src';
import { ResizableTextArea } from '../src';

const resizableTextAreaProps = () => (global as any).textAreaProps;

jest.mock('../src/ResizableTextArea', () => {
  const ReactReal: typeof React = jest.requireActual('react');
  const Resizable = jest.requireActual('../src/ResizableTextArea');
  const ResizableComponent = Resizable.default;
  return ReactReal.forwardRef<ResizableTextAreaRef, TextAreaProps>(
    (props, ref) => {
      (global as any).textAreaProps = props;
      return <ResizableComponent {...props} ref={ref} />;
    },
  );
});

it('should have no onPressEnter prop', () => {
  render(<ResizableTextArea defaultValue="test" />);
  expect(resizableTextAreaProps().onPressEnter).toBeUndefined();
});

it('should resize when an uncontrolled value changes', () => {
  const onInternalAutoSize = jest.fn();
  const props = {
    autoSize: true,
    defaultValue: 'test',
    onInternalAutoSize,
  } as TextAreaProps & { onInternalAutoSize: VoidFunction };
  const { container } = render(<ResizableTextArea {...props} />);

  onInternalAutoSize.mockClear();
  fireEvent.change(container.querySelector('textarea'), {
    target: { value: 'a longer uncontrolled value' },
  });

  expect(onInternalAutoSize).toHaveBeenCalledTimes(1);
});
