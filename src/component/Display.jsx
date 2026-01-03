import React, { useRef } from "react";

const Display = ({password}) => {

   const passwordRef = useRef(null);
   
   const copyToClipboard = () =>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    alert("Password copied to clipboard!");
   }

    return(
        <div className="flex items-center justify-between ">
          <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex items-center justify-between p-4">
           <input type="text" 
           value={password}
           readOnly
           ref={passwordRef}
           className="w-full text-2xl font-mono text-gray-700 outline-none bg-transparent placeholder-gray-400"
           placeholder="Password"/>
          </div>
          <button onClick={copyToClipboard}
           className="mb-5 py-4 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg uppercase ml-4 ">
             Copy
          </button>
        </div>
        
        
    )
}

export default Display;