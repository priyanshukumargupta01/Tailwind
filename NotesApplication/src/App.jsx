import React from "react";

const App = () => {

  const sumbitHandler=()=>{
    
  }
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex items-start justify-between p-10 gap-4" >
        <div className="flex flex-col w-1/2 ">
        <input 
        type="text" 
        className="px-5 w-full py-2 border-4 rounded m-2.5"
        placeholder="Enter Notes Heading" 
        />
        <textarea 
        type="text" 
        placeholder="Write Details"
        className="px-5 w-full py-2 h-40 border-4 rounded m-2.5"  
        />
        <button className="bg-white w-full px-4 py-2 m-2.5 rounded text-black">Add Notes</button>
        </div>
        <img className="h-90" src="https://static.vecteezy.com/system/resources/previews/022/299/318/non_2x/sticky-note-paper-transparent-free-png.png" alt="" />
      </form>
    </div>
  );
};

export default App;
