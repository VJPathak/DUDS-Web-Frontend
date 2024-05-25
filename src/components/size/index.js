import React, { useState } from 'react';
import './index.css';
import Label from '../Label';

export default function Size() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectedOption = (inputname) => {
    if (selectedOption === inputname) {
      setSelectedOption(null); // Unselect if already selected
    } else {
      setSelectedOption(inputname);
    }
  };

  return (
    <div className="size-area">
      <div className='size-heading-line'>
        <h3 className='size-heading'>Size</h3>
        <h3 className='size-heading'>-</h3>
      </div>
      <div className='size-options'>
        <Label
          name="XS/US(0-4)"
          inputname="type2a"
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
        <Label
          name="S/US(4-6)"
          inputname="type2b"
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
        <Label
          name="M/US(6-10)"
          inputname="type2c"
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
        <Label
          name="L/US(10-14)"
          inputname="type2d"
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
        <Label
          name="XL/US(12-16)"
          inputname="type2e"
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
      </div>
    </div>
  );
}
