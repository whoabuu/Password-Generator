import React, { useCallback, useEffect, useState } from "react";
import Checkbox from "./component/Checkbox.jsx";
import Slider from "./component/Slider.jsx";
import Display from "./component/Display.jsx";

const App = ()=>{

  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [options, setOptions] = useState({
    upper:true,
    lower:true,
    number:true,
    char:false
  });

  const handleCheckboxChange = (type)=>{
    setOptions((prev)=>({
      ...prev,
      [type]: !prev[type],
    }));
  }
  
  const generatePassword = useCallback(() =>{
      let charset = "";
      let generatedPassword = "";

      const chars = {
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lower: "abcdefghijklmnopqrstuvwxyz",
        number: "0123456789",
        char: "!@#$%^&*()-_+={}[]|\~`:;<>,./?",
      };

      if(options.upper) charset += chars.upper;
      if(options.lower) charset += chars.lower;
      if(options.number) charset += chars.number;
      if(options.char) charset += chars.char;

      if(charset.length == 0) return;

      for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * charset.length);
        generatedPassword += charset.charAt(randomIndex);
      }

      setPassword(generatedPassword);

  }, [options, length]);

  useEffect(() =>{
    generatePassword();
  },[generatePassword]);

  return(
    <div className="h-screen flex justify-center items-center bg-gray-100 text-black">
      <div className="w-full max-w-md p-10 rounded-xl shadow-lg bg-blue-200">
        <Display password={password}/>
        <Slider length={length} setLength={setLength}/>
        <Checkbox options={options} handleCheckboxChange={handleCheckboxChange}/>
        <button onClick={generatePassword}
         className="w-full mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform active:scale-95 cursor-pointer">
            GENERATE PASSWORD
        </button>
      </div>    
    </div>
  )
}

export default App;