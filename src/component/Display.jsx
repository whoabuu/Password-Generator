import React from "react";

const Display = () => {
    return(
        <div className="flex items-center justify-between ">
          <div className="mb-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex items-center justify-between p-4">
           <input type="text" 
           value="P4$5w0rd!"
           readOnly
           className="w-full text-2xl font-mono text-gray-700 outline-none bg-transparent placeholder-gray-400"
           placeholder="Password"/>
          </div>
          <button className="mb-5 py-4 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg uppercase ml-4 ">
             Copy
          </button>
        </div>
        
        
    )
}

export default Display;