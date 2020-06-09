import '../assets/index.less';
import React, { useState } from 'react';
import Textarea from '../src/index';

export default function App() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
  };
  return (
    <div>
      <Textarea autoSize value={value} onChange={onChange} />
    </div>
  );
}
