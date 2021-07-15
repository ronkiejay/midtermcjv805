import React from 'react'

const Buttons = ({id, value, toChangeColor}) =>{

    const changeColor = () => toChangeColor(id);

    return (
        <div>
        
            <button id="button5" type="button" className="eachbutton" onClick={changeColor}> {value} </button>
        </div>
    )
}

export default Buttons
