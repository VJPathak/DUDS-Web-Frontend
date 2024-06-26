import React from 'react';

export default function Label({ name, inputname, selectedOption, handleSelectedOption }) {
  return (
    <label className='label-container'>
      <input
        type='checkbox'
        value={inputname}
        checked={selectedOption === inputname}
        className='input-option'
        onChange={() => handleSelectedOption(inputname)}
      />
      <span className='cover-option'></span>
      {name}
    </label>
  );
}
