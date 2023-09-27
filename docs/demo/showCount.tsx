/* eslint-disable no-console */
import Textarea from 'rc-textarea';
import React, { useState } from 'react';
import '../../assets/index.less';

export default function App() {
  const [value, setValue] = useState('hello\nworld');

  const onChange = (e) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };

  return (
    <div>
      <p>Uncontrolled</p>
      <Textarea autoSize showCount />
      <p>controlled</p>
      <Textarea value={value} onChange={onChange} showCount maxLength={100} />
      <p>with height</p>
      <Textarea
        value={value}
        onChange={onChange}
        showCount
        style={{ height: 200, width: '100%', resize: 'vertical' }}
      />
      <hr />
      <p>Count.exceedFormatter</p>
      <Textarea
        defaultValue="👨‍👨‍👧‍👦"
        count={{
          show: true,
          max: 5,
        }}
      />
      <Textarea
        defaultValue="🔥"
        count={{
          show: true,
          max: 5,
          exceedFormatter: (val, { max }) => {
            const segments = [...new Intl.Segmenter().segment(val)];

            return segments
              .filter((seg) => seg.index + seg.segment.length <= max)
              .map((seg) => seg.segment)
              .join('');
          },
        }}
      />
    </div>
  );
}
