import React from "react";
import Checkbox from "./component/Checkbox.jsx";
import Slider from "./component/Slider.jsx";
import Display from "./component/Display.jsx";

const App = ()=>{
  return(
    <div className="h-screen flex justify-center items-center bg-gray-100 text-black">
      <div className="w-full max-w-md p-10 rounded-xl shadow-lg bg-blue-200">
        <Display/>
        <Slider/>
        <Checkbox/>
        <button className="w-full mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform active:scale-95 cursor-pointer">
            GENERATE PASSWORD
        </button>
      </div>    
    </div>
  )
}

export default App;