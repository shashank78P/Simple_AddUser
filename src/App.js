import { useState } from 'react';
import Card from './card';
import './App.css';

function App() {
  const [name, setName] = useState("");
  let [year, setYear] = useState("");
  let [users, setUsers] = useState([]);
  const [isValid,setIsValid] = useState(true)
  const [message,setMessage] = useState("")

  function storeName(event){
    setName(event.target.value)
  }
  function storeYear(event){
    setYear(event.target.value)
  }

function Add() {
  if(name === "" && year == ""){
    setMessage("No data to add")
    setIsValid(false)
    return
    
  }
  if(name.trim().length < 3){
      setMessage("Name must contain atleast 3 character")
      setIsValid(false)
      return
    }
    if(year < 1){
      setMessage("age must be > 0")
      setIsValid(false)
      return
    }
    setUsers([...users,{userName : name, userYear : year}])
    setName("")
    setYear("")
    setIsValid(true)
  }

  return (
    <>
    {
    (!isValid) ?
      <div className="message">{message}</div> : null
    }
      <div className="frame">
        <div className="title">Add User</div>
        <div className="children">
          <label className="row">
            <span>Name : </span>
            <input type="text" onChange={storeName} value={name}></input>
          </label>
          <div></div>
        </div>
        <div className="children">
          <label className="row">
            <span>Age : </span>
            <input type="number" onChange={storeYear} value={year}></input>
          </label>
          <div></div>
        </div>
        <div className="button_parent">
          <input type="button"  onClick={Add} className="sub_btn button" value="add" />
        </div>
      </div>
      <div className="list_container">
        <Card className="cards" users={users}/>
      </div>
    </>
  );
}

export default App;
