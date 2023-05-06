//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useEffect, useState}from "react";
import axios from "axios"
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx"
import { getOne } from "../../server/database-mysql";
import Add from "./components/Add.jsx"
function App() {
const [view,setView]=useState('Home')
const[data,setData]=useState([])
const handleShow = () => {
  setShow(!show);
}
const handleDelete=(()=>{
  deleteOne()
})
const handleSearch=(()=>{
  getOne()
})

function fetchData(){
  axios.get("http://localhost:4000/api/recepie")
  .then((res)=>{
    setData(res.data)
  })
  .catch((err)=>{console.log(err)})
}
useEffect(()=>{
  fetchData()
},[])
 
  let changeView = (view) => {
    setView(view);
  };

axios.post("http://localhost:4000//api/recepie")
.then((res)=>{
  console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
    })
axios.get("/api/recepie/search/recepie_Name")
.then((res)=>{
  console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
    })


  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>
        <div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
         
        </div>
        <>
        {show && (
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie"),handleShow}
        >
          Addrecepie
          </Add >
        </div>
        )}
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button onClick={handleSearch}>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView} />}
      {view === "Allrecepies" && <AllRecepies data={data} handleDelete={handleDelete}/>}
     
      <div></div>
    </div>
  );
}

export default App;
