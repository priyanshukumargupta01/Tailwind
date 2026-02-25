import React from "react";

const App = () => {
  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log("sumbit");
  };
  return (
    <div className="h-screen bg-black text-white">
      <form className="flex items-start justify-between p-10 gap-4">
        <div className="flex flex-col w-1/2 ">
        <h1 className="text-2xl font-semibold">Enter Notes</h1>
        
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
          <button
            onClick={function (e) {
              sumbitHandler(e);
            }}
            className="bg-white w-full px-4 py-2 m-2.5 rounded text-black"
          >
            Add Notes
          </button>
        </div>
        <div className="mx-30">
          <h1 className="text-2xl font-semibold">Recent Notes</h1>
          <div className="flex gap-4" >
          <div className="h-42 w-32 m-5  rounded-2xl bg-white "> </div>
          <div className="h-42 w-32  m-5 rounded-2xl bg-white "> </div>
          <div className="h-42 w-32  m-5 rounded-2xl bg-white "> </div>
          <div className="h-42 w-32  m-5 rounded-2xl bg-white "> </div>
        </div></div>
      </form>
    </div>
  );
};

export default App;
