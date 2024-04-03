import './App.css'
import{useState} from 'react'
function App(){
  let[Name , setname] = useState("")

  return(
    <div className='App'> 
      <h1>Controll Component</h1>
      <h3>What is the React :) {Name}</h3>
      <input type="text" value={Name} onChange={(evt)=>setname(evt.target.value)}></input>
      <button onClick={(evt)=>setname(evt.target.value = '')}>For Reset</button>

      {/* <button onClick={()=>setname('')}>For Reset</button> */}

      {/* you can also use here parameter for clear input their syntax btn event onClick={(e)=>setname(e.target.value = '')} */}
    </div>  
  )
}
export default App