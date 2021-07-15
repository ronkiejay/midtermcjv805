import React from 'react'



const LeftButtons = ({id, amount, moneyValue}) => {

    const captureAmount = () => moneyValue(id);

    return (
        <div>
            <button id="button1" type="button" className="dollar1" onClick={captureAmount}>${amount}</button> 
        </div>
    )
}

export default LeftButtons
