// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

import {useState, useEffect} from 'react'

import Header from "./Header";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import RightSide from "./RightSide";

import '../App.css';
//import buttonContext from "../context/ButtonContext";

const App = () => {

  // const changeButton = () =>{

  // const displayNumbers = buttons.find(button=>button.value);
    
  // }

  const [buttons, setButtons] = useState([]);

  const changeColorButton = (id) => {
      
      const newButtons = buttons.filter((button) => {
          return (
              `<button id="clickedButton" type="button" className="eachbutton" onClick={changeColor}> ${button.id} </button>`
          )

      })
      alert(`${id} was clicked`);
      setButtons(newButtons);

      
  }

  useEffect(()=>{
      const fakeDb = [
          
          {
              id:1,
              value: 1
          },
          {
              id:2,
              value: 2
          },
          {
              id:3,
              value: 3
          },
          {
              id:4,
              value: 4
          },
          {
              id:5,
              value: 5
          },
          {
              id:6,
              value: 6
          },
          {
              id:7,
              value: 7
          },
          {
              id:8,
              value: 8
          },
          {
              id:9,
              value: 9
          },
          {
              id:10,
              value: 10
          }
      ]

          setButtons(fakeDb);

  },[])

  const [details, setDetails, total, setTotal] = useState([]);

    const allTotal = () => {
        let initialTotal = total;
        const addTotal = initialTotal + moneyValue;
        return allTotal; 
    }

 
  return (
    <div >
      <Header />
      <div className="grid grid-col-3">
        <LeftSide />
        <Middle buttons= {buttons} toChangeColor={changeColorButton}/>
        {/* <Middle buttons={buttons} /> */}
        
        <RightSide />
      </div>
    </div>
  );
}

export default App;
