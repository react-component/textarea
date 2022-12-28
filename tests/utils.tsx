import React from 'react';
import { fireEvent, render } from '@testing-library/react';

export const sleep = (timeout = 0) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export function focusTest(Component, { refFocus = false } = {}) {
  describe('focus and blur', () => {
    let focused = false;
    let blurred = false;
    const mockFocus = jest.spyOn(HTMLElement.prototype, 'focus');
    const mockBlur = jest.spyOn(HTMLElement.prototype, 'blur');

    beforeAll(() => {
      if (refFocus) {
        mockFocus.mockImplementation(() => {
          focused = true;
        });
        mockBlur.mockImplementation(() => {
          blurred = true;
        });
      }
    });

    let divContainer;
    beforeEach(() => {
      divContainer = document.createElement('div');
      document.body.appendChild(divContainer);
      focused = false;
      blurred = false;
    });

    afterAll(() => {
      mockFocus.mockRestore();
      mockBlur.mockRestore();
    });

    afterEach(() => {
      document.body.removeChild(divContainer);
    });

    if (refFocus) {
      it('Ref: focus() and onFocus', () => {
        const onFocus = jest.fn();
        const ref = React.createRef<{ focus: () => void }>();
        const { container } = render(
          <div>
            <Component onFocus={onFocus} ref={ref} />
          </div>,
        );
        ref.current.focus();
        expect(focused).toBeTruthy();

        fireEvent.focus(container.querySelector('input'));
        expect(onFocus).toHaveBeenCalled();
      });

      it('Ref: blur() and onBlur', async () => {
        jest.useRealTimers();
        const onBlur = jest.fn();
        const ref = React.createRef<{ blur: () => void }>();
        const { container } = render(
          <div>
            <Component onBlur={onBlur} ref={ref} />
          </div>,
        );

        ref.current.blur();
        expect(blurred).toBeTruthy();

        fireEvent.blur(container.querySelector('input'));
        await sleep(0);
        expect(onBlur).toHaveBeenCalled();
      });

      it('Ref: autoFocus', () => {
        const onFocus = jest.fn();
        const { container } = render(<Component autoFocus onFocus={onFocus} />);

        expect(focused).toBeTruthy();

        fireEvent.focus(container.firstChild);
        expect(onFocus).toHaveBeenCalled();
      });
    } else {
      it('focus() and onFocus', () => {
        const handleFocus = jest.fn();
        const { container } = render(<Component onFocus={handleFocus} />);
        fireEvent.focus(container.firstChild);
        expect(handleFocus).toHaveBeenCalled();
      });

      it('blur() and onBlur', async () => {
        jest.useRealTimers();
        const handleBlur = jest.fn();
        const { container } = render(<Component onBlur={handleBlur} />);
        fireEvent.focus(container.firstChild);
        await sleep(0);
        fireEvent.blur(container.firstChild);
        await sleep(0);
        expect(handleBlur).toHaveBeenCalled();
      });

      it('autoFocus', () => {
        jest.useRealTimers();
        const handleFocus = jest.fn();
        render(<Component autoFocus onFocus={handleFocus} />);
        jest.runAllTimers();
        expect(handleFocus).toHaveBeenCalled();
      });
    }
  });
}
