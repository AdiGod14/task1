import React, { useState, useRef } from 'react';
import './colour.css';
function Colour() { 
  const [colourOne, setColourOne] = useState('');
  const [colourTwo, setColourTwo] = useState('');
  const buttonRef = useRef(null);

  const handleSubmitOne = (e) => {
    e.preventDefault();
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = colourOne || 'lightgrey';
    }
    
  };

  const handleSubmitTwo = (e) => {
    e.preventDefault();
    alert(`Form 2 submitted: You selected ${colourTwo}`);
  };

  return (
    <div className='container'>

      <form onSubmit={handleSubmitOne} id="form1">
        <label>Button Colour changes After Clicking:</label>
        <br/>
        <input 
          type="text" 
          value={colourOne} 
          onChange={(e) => setColourOne(e.target.value)} 
          placeholder="Form 1 input"
        />
        <br/>
        <button type="submit" id="changerOne" ref={buttonRef}>
          Change Colour
        </button>
      </form>

      <br />


      <form onSubmit={handleSubmitTwo} id="form2">
        <label>Button Colour changes without Clicking:</label>
        <input 
          type="text" 
          value={colourTwo} 
          onChange={(e) => setColourTwo(e.target.value)} 
          placeholder="Form 2 input"
        />
        <button 
          type="submit" 
          id="changerTwo" 
          style={{ backgroundColor: colourTwo || 'lightgrey' }}
        >
          Change Colour
        </button>
      </form>
    </div>
  );
}

export default Colour;
