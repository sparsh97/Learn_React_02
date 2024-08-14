import React, { useState } from 'react';

function RandomColor() {
   const [type, setType] = useState('hex');
   const [color, setColor] = useState('#f15025');
   const handleRandomColor = () => {
      let newColor = '#';
      if(type === 'hex') {
         const hexValues = '0123456789ABCDEF';
         for(let i = 0; i < 6; i++) {
         newColor += hexValues[Math.floor(Math.random() * 16)];
         }
      } else {
         for(let i = 0; i < 3; i++) {
         newColor += Math.floor(Math.random() * 256) + ',';
         }
         newColor = `rgb(${newColor.slice(0, -1)})`;
      }
      setColor(newColor);
   }
  return (
    <div className='p-2 m-2 w-auto h-[100%] border border-spacing-2' 
      style={{backgroundColor: color}}>
      <h2 className='p-1 text-center'>Generate Random Color - {color}</h2>
      <div className="flex flex-wrap justify-center">
         <button onClick={()=> setType('hex')} className="bg-orange-400 m-2 p-1 border radius-2">Hex Color</button>
         <button onClick={()=> setType('rgb')}className="bg-orange-400 m-2 p-1 border radius-2">RGB Color</button>
         <button onClick={()=> handleRandomColor()}className="bg-orange-400 m-2 p-1 border radius-2">Random Color</button>
      </div>
    </div>
  )
}

export default RandomColor;