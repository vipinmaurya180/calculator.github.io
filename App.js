import React, { useState } from 'react'
import './App.css'
import { clear } from '@testing-library/user-event/dist/clear';
const App = () => {
  const [result, setResult] = useState("");
  
  const handleClick = (e) => {
     
     setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult(" ")
  }

  const backspace = () => {
    setResult(result.slice(0,result.length-1));
  }

  const calculate = () =>{
    try{
      setResult(eval(result).tostring())
    } catch(err){
      setResult="error"
    }
    
  }
    return (
    <>
      <div className="container">
            <form>
              <input type="text" value={result} />
            </form>

            <div className="keypad">
              <button className= "highlight" onclick = {clear} id = "clear">Clear</button>
              <button className= "highlight" onclick = {backspace} id = "backspace">C</button>
              <button className= "highlight" name = "/"onclick = {handleClick}>&divide;</button>
              <button name = "7"onclick = {handleClick}>7</button>
              <button name = "8"onclick = {handleClick}>8</button>
              <button name = "9"onclick = {handleClick}>9</button>
              <button className= "highlight" name = "*"onclick = {handleClick}>&times;</button>
              <button name = "4"onclick = {handleClick}>4</button>
              <button name = "5"onclick = {handleClick}>5</button>
              <button name = "6"onclick = {handleClick}>6</button>
              <button className= "highlight" name = "-"onclick = {handleClick}>&ndash;</button>
              <button name = "1"onclick = {handleClick}>1</button>
              <button name = "2" onclick = {handleClick}>2</button>
              <button name = "3"onclick = {handleClick}>3</button>
              <button className= "highlight" name = "+"onclick = {handleClick}>+</button>
              <button name = "0"onclick = {handleClick}>0</button>
              <button name = "."onclick = {handleClick}>.</button>
              <button className= "highlight" name onclick = {calculate} id = "result">=</button>
            </div>
      </div>
    </>
  );
}

export default App;