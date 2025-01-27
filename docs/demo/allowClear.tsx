/* eslint-disable no-console */
import Textarea from '@rc-component/textarea';
import React, { useState } from 'react';

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
      <Textarea autoSize allowClear />
      <p>controlled</p>
      <Textarea value={value} onChange={onChange} allowClear />
    </div>
  );
}
