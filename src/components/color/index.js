import React, { useState } from 'react';
import './index.css';
import ColorLabel from '../ColorLabel';

export default function Color() {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSelectedColor = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null); // Unselect if already selected
    } else {
      setSelectedColor(color);
    }
  };

  return (
    <div className="color-area">
      <div className='color-heading-line'>
        <h3 className='color-heading'>Color</h3>
        <h3 className='color-heading'>-</h3>
      </div>
      <div className='color-options'>
        <ColorLabel
          name="Black"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
        <ColorLabel
          name="Red"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
        <ColorLabel
          name="Green"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
        <ColorLabel
          name="Yellow"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
        <ColorLabel
          name="DarkBlue"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
        <ColorLabel
          name="Purple"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
        <ColorLabel
          name="Pink"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
        <ColorLabel
          name="LightBlue"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
        <ColorLabel
          name="Orange"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
        <ColorLabel
          name="White"
          inputname="type3"
          selectedColor={selectedColor}
          handleSelectedColor={handleSelectedColor}
        />
      </div>
    </div>
  );
}
