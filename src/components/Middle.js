import React from 'react'
import Buttons from "./Buttons"
import {useState, useEffect} from 'react'

const Middle = (props) => {
    

    return (
        
        <div  >
            <div class="middleColumn">
                {props.buttons.map((button)=>(<Buttons key={button.id} id={button.id} value={button.value} toChangeColor={props.toChangeColor}/>))}
            </div>
            

            {/* {buttons.map((button)=>(<Buttons id={button.id} key={button.id} value={button.value}/>))} */}
            
            
        </div>
       
    )
}

export default Middle
