import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    // Only add if title or details is not empty
    if (title.trim() || details.trim()) {
      // Create new task object
      const newTask = { 
        title, 
        details,
        id: Date.now() // Add unique id for key prop
      };
      
      // Add new task to tasks array
      setTasks([...tasks, newTask]);
      
      // Clear input fields
      setTitle("");
      setDetails("");
      
      console.log("Task added:", newTask);
      console.log("All tasks:", [...tasks, newTask]);
    }
  };

  return (
    <div className="h-screen bg-black text-white">
      <form className="lg:flex items-start justify-between p-10 gap-4">
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-2xl font-semibold">Enter Notes</h1>

          <input
            type="text"
            className="px-5 w-full py-2 border-4 rounded m-2.5"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            type="text"
            placeholder="Write Details"
            className="px-5 w-full py-2 h-40 border-4 rounded m-2.5"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          />
          <button
            onClick={submitHandler}
            className="bg-white active:scale-95 active:bg-gray-500 w-full px-4 py-2 m-2.5 rounded text-black"
          >
            Add Notes
          </button>
        </div>
        <div className="lg:mx-30 mx-10">
          <h1 className="text-2xl font-semibold">Recent Notes</h1>
          <div className="flex gap-4 overflow-x-auto">
            {/* Map through tasks and display each note */}
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div 
                  key={task.id} 
                  className="h-42 w-32 m-5 rounded-2xl min-w-32 bg-white text-black p-2 overflow-hidden"
                >
                  <h3 className="font-bold text-sm truncate">{task.title}</h3>
                  <p className="text-xs mt-1 truncate">{task.details}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-400 m-5">No notes yet</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;