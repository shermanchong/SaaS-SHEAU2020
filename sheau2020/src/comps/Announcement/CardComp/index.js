import React from 'react'
import But from '../../But'
import DatePicker from 'react-date-picker'
import Content from '../CardComp/Content'

function CardComp({ buttons, di }) {



    return (
        <div class="cardComp">
            <DatePicker class="cardLeft" />
            <div class="cardRight">
               
                <div class="displayCont">
                    {di.map((o, i) => {
                        return <Content {...o} />
                    })}
                </div>
                <div className="buttons">
                    {buttons.map((o, i) => {
                        return <But {...o} />
                    })}
                </div>

            </div>
        </div>

    )


}

CardComp.defaultProps = {
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
export default CardComp;