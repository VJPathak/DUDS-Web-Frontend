import React, { useState } from 'react';
import './index.css';
import Label from '../Label';

export default function SortBy() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectedOption = (inputname) => {
    if (selectedOption === inputname) {
      setSelectedOption(null); // Unselect if already selected
    } else {
      setSelectedOption(inputname);
    }
  };

  return (
    <div className="sort-by">
      <div className='sortby-heading-line'>
        <h3 className='sortby-heading'>Sort By</h3>
        <h3 className='sortby-heading'>-</h3>
      </div>
      <div className='sortby-options'>
        <Label
          name="Featured"
          inputname="type1a"
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
        <Label
          name="Best Seller"
          inputname="type1b"
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
        <Label
          name="Price : Low To High"
          inputname="type1c"
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
        <Label
          name="Price : High To Low"
          inputname="type1d"
          selectedOption={selectedOption}
          handleSelectedOption={handleSelectedOption}
        />
      </div>
    </div>
  );
}
