import React from 'react'
import LeftButtons from "./LeftButtons"
import lottoImage from "../img/lotto.jpg";
import { useState, useEffect } from 'react';

const LeftSide = () => {

    // const [moneyButtons, setMoneyButtons] = useState([]);

    // const moneyClicked = () =>{
    //     const filterAmount = moneyButtons.filter((moneyButton)=>{
    //         return (moneyButton.amount);
    //     })
    //     setMoneyButtons(filterAmount);
        
    // }
    

    // useEffect(()=>{
    //     const buttonAmount = [
    //         {
    //         id:1,
    //         amount:1
    //         },
    //         {
    //             id:2,
    //             amount:5
    //         },
    //         {
    //             id:3,
    //             amount:10
    //         },
    //         {
    //             id:4,
    //             amount:20
    //         }
    //     ]
    //     setMoneyButtons(buttonAmount);
    // }, [])

    return (
        <div id="allbuttons">
            <div >
                <img src={lottoImage} id="lottoImg" alt=""/>
               
            </div >
            <div className="gridbuttons">
                <div id="buttons">
                    {/* {moneyButtons.map((moneyButton)=>(<LeftButtons key={moneyButton.id} id={moneyButton.id} amount={moneyButton.amount} />))}  */}
                </div>
            </div>
        </div>
    )
}

export default LeftSide
