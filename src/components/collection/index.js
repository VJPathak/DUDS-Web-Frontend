import React, { useState } from 'react';
import './index.css';
import CLabel from './CollectionLabel';
export default function Collection() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectedOption = (inputname) => {
    if (selectedOptions.includes(inputname)) {
      setSelectedOptions(selectedOptions.filter(option => option !== inputname)); // Unselect if already selected
    } else {
      setSelectedOptions([...selectedOptions, inputname]); // Add to selected options
    }
  };

  return (
    <div className="collection-area">
      <div className='collection-heading-line'>
        <h3 className='collection-heading'>Collection</h3>
        <h3 className='collection-heading'>-</h3>
      </div>
      <div className='collection-options'>
        <CLabel
          name="In Stock"
          inputname="type4a"
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
        <CLabel
          name="Out Of Stock"
          inputname="type4b"
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
      </div>
    </div>
  );
}
