import { render } from '@testing-library/react';
import React from 'react';
import TextArea from '../src';

describe('should support showCount', () => {
  it('maxLength', () => {
    const { container } = render(
      <TextArea maxLength={5} showCount value="12345" />,
    );
    expect(container.querySelector('textarea')?.value).toBe('12345');
    expect(
      container
        .querySelector('.rc-textarea-show-count')
        ?.getAttribute('data-count'),
    ).toBe('5 / 5');
    expect(container.querySelector('.rc-textarea-data-count')?.innerHTML).toBe(
      '5 / 5',
    );
  });

  it('control exceed maxLength', () => {
    const { container } = render(
      <TextArea maxLength={5} showCount value="12345678" />,
    );
    expect(container.querySelector('textarea')?.value).toBe('12345678');
    expect(
      container
        .querySelector('.rc-textarea-show-count')
        ?.getAttribute('data-count'),
    ).toBe('8 / 5');
    expect(container.querySelector('.rc-textarea-data-count')?.innerHTML).toBe(
      '8 / 5',
    );
  });

  it('should support object', () => {
    const { container } = render(
      <TextArea
        maxLength={5}
        showCount={{
          formatter: ({ value, count, maxLength }) =>
            `${value}, ${count}, ${maxLength}`,
        }}
        value="12345"
      />,
    );
    expect(container.querySelector('textarea')?.value).toBe('12345');
    expect(
      container
        .querySelector('.rc-textarea-show-count')
        ?.getAttribute('data-count'),
    ).toBe('12345, 5, 5');
    expect(container.querySelector('.rc-textarea-data-count')?.innerHTML).toBe(
      '12345, 5, 5',
    );
  });

  describe('emoji', () => {
    it('should minimize value between emoji length and maxLength', () => {
      const { container } = render(
        <TextArea maxLength={1} showCount value="👀" />,
      );
      expect(container.querySelector('textarea')?.value).toBe('👀');
      expect(
        container
          .querySelector('.rc-textarea-show-count')
          ?.getAttribute('data-count'),
      ).toBe('1 / 1');
      expect(
        container.querySelector('.rc-textarea-data-count')?.innerHTML,
      ).toBe('1 / 1');

      // fix: 当 maxLength 长度为 2 的时候，输入 emoji 之后 showCount 会显示 1/2，但是不能再输入了
      // zombieJ: 逻辑统一了，emoji 现在也可以正确计数了
      const { container: container1 } = render(
        <TextArea maxLength={2} showCount value="👀" />,
      );
      expect(
        container1
          .querySelector('.rc-textarea-show-count')
          ?.getAttribute('data-count'),
      ).toBe('1 / 2');
      expect(
        container1.querySelector('.rc-textarea-data-count')?.innerHTML,
      ).toBe('1 / 2');
    });

    it('defaultValue should slice', () => {
      const { container } = render(
        <TextArea maxLength={1} defaultValue="🧐cut" />,
      );
      expect(container.querySelector('textarea')?.value).toBe('🧐');
    });

    // 修改TextArea value截取规则后新增单测
    it('slice emoji', () => {
      const { container } = render(
        <TextArea maxLength={5} showCount value="1234😂" />,
      );
      expect(container.querySelector('textarea')?.value).toBe('1234😂');
      expect(
        container
          .querySelector('.rc-textarea-show-count')
          ?.getAttribute('data-count'),
      ).toBe('5 / 5');
      expect(
        container.querySelector('.rc-textarea-data-count')?.innerHTML,
      ).toBe('5 / 5');
    });
  });

  it('className & style patch to outer', () => {
    const { container } = render(
      <TextArea className="bamboo" style={{ background: 'red' }} showCount />,
    );

    // Outer
    expect(
      container.querySelector('span')?.classList.contains('bamboo'),
    ).toBeTruthy();
    expect(container.querySelector('span')?.style.background).toEqual('red');

    // Inner
    expect(
      container.querySelector('.rc-textarea')?.classList.contains('bamboo'),
    ).toBeFalsy();
    expect(
      container.querySelector<HTMLDivElement>('.rc-textarea')?.style.background,
    ).toBeFalsy();
  });
});
