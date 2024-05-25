import React, { useState } from 'react';
import './index.css';
// import Label from '../Label';
import CLabel from '../collection/CollectionLabel';

export default function Fabric() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectedOption = (inputname) => {
    if (selectedOptions.includes(inputname)) {
      setSelectedOptions(selectedOptions.filter(option => option !== inputname)); // Unselect if already selected
    } else {
      setSelectedOptions([...selectedOptions, inputname]); // Add to selected options
    }
  };

  return (
    <div className="fabric-area">
      <div className='fabric-heading-line'>
        <h3 className='fabric-heading'>Fabric</h3>
        <h3 className='fabric-heading'>-</h3>
      </div>
      <div className='fabric-options'>
        <CLabel
          name="Cotton"
          inputname="type5a"
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
        <CLabel
          name="Linen"
          inputname="type5b"
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
        <CLabel
          name="Wool"
          inputname="type5c"
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
        <CLabel
          name="Silk"
          inputname="type5d"
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
        <CLabel
          name="Cashmere"
          inputname="type5e"
          selectedOptions={selectedOptions}
          handleSelectedOption={handleSelectedOption}
        />
      </div>
    </div>
  );
}
