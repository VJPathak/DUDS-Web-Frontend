import React from 'react';

export default function CLabel({ name, inputname, selectedOptions, handleSelectedOption }) {
  const isChecked = selectedOptions.includes(inputname);

  return (
    <label className='label-container'>
      <input
        type='checkbox'
        value={inputname}
        checked={isChecked}
        className='input-option'
        onChange={() => handleSelectedOption(inputname)}
      />
      <span className='cover-option'></span>
      {name}
    </label>
  );
}
