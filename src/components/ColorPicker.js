import React, { useState } from 'react';
import { ChromePicker } from 'react-color';

function ColorPicker() {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  return (
    <div className="mt-5 pt-5 mb-5 pb-5">
      <h1>Selected Color: {color}</h1>
      <ChromePicker color={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
