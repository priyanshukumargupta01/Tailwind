import React from "react";

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex flex-col p-10 gap-2" >
        <input 
        type="text" 
        className="px-5 py-2 border-4 rounded m-2.5"
        placeholder="Enter Notes Heading" 
        />
        <input 
        type="text" 
        placeholder="Write Details"
        className="px-5 py-2 h-20 border-4 rounded m-2.5"  
        />
        <button></button>
      </form>
    </div>
  );
};

export default App;
