import React from 'react'
import But from '../../But'
import DatePicker from 'react-date-picker'
import Content from '../CardComp/Content'

function CardCompInput({ buttons, di, }) {

   

    return (
        <div class="cardComp">
            <DatePicker class="cardLeft" />
            <div class="cardRight">
                <input class="header" placeholder="Title"></input>
                <textarea class="contents" placeholder="Message"></textarea>
               
                <div className="buttons">
                    {buttons.map((o, i) => {
                        return <But {...o} />
                    })}
                </div>

            </div>
        </div>

    )


}

CardCompInput.defaultProps = {
    buttons: [
        {
            buttonText: "Button 1",
            active: true,

        },

    ],

    di: [
        {
            display: false,
            dispText: "Field trip Tomorrow!",
            dispContent: "Please bring the following...",
        }
    ]
}
export default CardCompInput;