import React from 'react'
import But from '../../But'

function DiscCardInput({ buttons, di }) {



    return (
        <div class="cardComp">
            <div class="cardLeft">
                <img ></img>
            </div>
            <div class="cardRight">
                <input class="question" placeholder="Got a Question?"></input>
                
                <div className="buttons">
                    {buttons.map((o, i) => {
                        return <But {...o} />
                    })}
                </div>

            </div>
        </div>

    )


}

DiscCardInput.defaultProps = {
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
export default DiscCardInput;