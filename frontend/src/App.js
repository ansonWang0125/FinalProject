import { useState } from 'react';
import './App.css'
import { Save } from './axios.js'

function App() {

  const [point, setPoint] = useState('')
  const [name, setName] = useState('')

  const save = async () => {
    await Save()
    let btn = document.getElementById('name');
    btn.value = '';
    setName('')
    let btn1 = document.getElementById('point');
    btn1.value = '';
    setPoint('')
  }
  
  const gameMode = 
  <>
    <p>Insert the name and point</p>
    <input
      placeholder="name"
      id = "name"
      onChange = {(e)=>{setName(e.target.value)}}
    ></input>
    <input
      placeholder="point"
      id = "point"
      onChange = {(e)=>{setPoint(e.target.value)}}
    ></input>
    <button disabled = {!point | !name}
      onClick = {()=>{save(name, point)}}
    >save</button>
  </>

  return (
    <div>{gameMode}</div>
  );
}

export default App;
