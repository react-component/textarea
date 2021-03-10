/* eslint-disable no-console */
import React, { useState } from 'react';
import Textarea from '../src/index';

export default function App() {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const {
      target: { value: currentValue },
    } = e;
    setValue(currentValue);
    console.log(`change to ${currentValue}`);
  };

  const onResize = ({ width, height }) => {
    console.log(`size is changed, width:${width} height:${height}`);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onPressEnter = (e) => {
    console.log(`enter key is pressed`);
  };

  return (
    <div>
      <h2>Base</h2>
      <Textarea
        prefixCls="custom-textarea"
        onPressEnter={onPressEnter}
        onResize={onResize}
        value={value}
        onChange={onChange}
      />
      <h2>Shift Enter</h2>
      <Textarea
        prefixCls="custom-textarea"
        onPressEnter={onPressEnter}
        onResize={onResize}
        lineBreakKey="ShiftEnter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
