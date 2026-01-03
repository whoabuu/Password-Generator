import React, { useState } from "react";

const Slider = ({length, setLength}) =>{

    const min = 6;
    const max = 30;

    const percentage = ((length - min) / (max - min)) * 100;

    return(
        <div className="mb-6">

          <div className="flex items-center justify-between mb-2">
            <label className="font-semibold text-gray-700 text-lg">Password length : {length}</label>
            {/*<span className="font-semibold text-gray-700">{length}</span>*/}
          </div>

          <input type="range" 
          min={6}
          max={30}
          step={2}
          value={length}
          onChange={(e) => setLength(e.target.value)}
          style={{
            background: `linear-gradient(to right,rgb(48, 137, 240) ${percentage}%,rgb(200, 202, 205) ${percentage}%)`,
          }}
          className={`
            w-full h-2 rounded-lg appearance-none cursor-pointer outline-none
            
            /* THUMB STYLING (The Handle) */
            /* These arbitrary variants target the browser-specific pseudo-elements */
            
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:bg-blue-500
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:hover:scale-110
          `}
          />
        </div>
    )
}

export default Slider;