import axios from "axios"



const App = () => {


 const getData = ()=>{
  axios.post("https://picsum.photos/v2/list?page=2&limit=10",{user:"pk",password:"12345678"})
  
 }

  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button 
      onClick={getData}
      className="bg-green-600 active:scale-95 text-white px-2 py-4 rounded "
      >Get DATA</button>
    </div>
  )
}

export default App