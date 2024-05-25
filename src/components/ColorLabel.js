import React from 'react';

export default function ColorLabel({ name, inputname, selectedColor, handleSelectedColor }) {
  return (
    <label className='label-container'>
      <input
        type='checkbox'
        name={inputname}
        className='input-option'
        checked={selectedColor === name}
        onChange={() => handleSelectedColor(name)}
      />
      <span className='cover-option'></span>
      <span
        style={{
          width: '25px',
          height: '25px',
          borderRadius: '50%',
          backgroundColor: name,
          marginRight: '5px'
        }}
      ></span>
      {name}
    </label>
  );
}
