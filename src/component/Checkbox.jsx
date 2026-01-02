import React from "react";

const Checkbox = () => {
    return(
      <div className="grid grid-cols-2 gap-4 mt-4">

         <div className="flex items-center gap-x-3">
           <input 
           type="checkbox" 
           defaultChecked={true}
           className="w-5 h-5 text-blue-600 cursor-pointer"
           id="upper"
           />
           <label htmlFor="upper" className="text-lg font-medium cursor-pointer whitespace-nowrap">
              Uppercase Letters
           </label>
         </div>

         <div className="flex items-center gap-x-3">
           <input 
           type="checkbox" 
           defaultChecked={true}
           className="w-5 h-5 text-blue-600 cursor-pointer"
           id="lower"
           />
           <label htmlFor="lower" className="text-lg font-medium cursor-pointer whitespace-nowrap">
              Lowercase Letters
           </label>
         </div>

         <div className="flex items-center gap-x-3">
           <input 
           type="checkbox" 
           defaultChecked={true}
           className="w-5 h-5 text-blue-600 cursor-pointer"
           id="number"
           />
           <label htmlFor="number" className="text-lg font-medium cursor-pointer whitespace-nowrap">
              Numbers
           </label>
         </div>

         <div className="flex items-center gap-x-3">
           <input 
           type="checkbox" 
           defaultChecked={true}
           className="w-5 h-5 text-blue-600 cursor-pointer"
           id="char"
           />
           <label htmlFor="char" className="text-lg font-medium cursor-pointer whitespace-nowrap">
              Special Characters
           </label>
         </div>
      </div>
    )
}

export default Checkbox;