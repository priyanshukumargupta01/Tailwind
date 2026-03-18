import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10",
    );

    setUserData(response.data);
  };
  let presentData = "Data not founded";

  return (
    <div className="bg-black h-full p-4 text-white">
      <button
        onClick={getData}
        className="bg-green-600 active:scale-95 text-white px-2 py-4 rounded"
      >
        Get DATA
      </button>
      <div className="flex  justify-evenly overflow-x-hidden p-5 ">
        {userData.map((item, index) => (
          <img
            key={index}
            src={item.download_url}
            alt=""
            className="w-40 mb-2 p-6"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
