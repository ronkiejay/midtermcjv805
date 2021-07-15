import React from 'react'
import {useState, useEffect} from 'react'


const RightSide = ({details, total, moneyValue}) => {

    const [total, setTotal] = useState(0);
    const [details, setDetails] = useState("");
    

    

    return (
        <div class="right">
            <p id="text1">Number Selected: value={details} onChange={(event)=>{
                setDetails(event.target.value);
            }}</p>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/>
            <p id="totaltext">Total: value={total} onChange={(event)=>{
                setTotal(event.target.value);
            }}</p>
   
        
        </div>
    )
}

export default RightSide
