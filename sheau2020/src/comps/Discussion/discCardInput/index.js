import React from 'react'
import But from '../../But'

function DiscCardInput({ buttons, di }) {



    return (
        <div class="cardComp">
            <img class="cardLeft"></img>
            <div class="cardRight">
                <input class="header" placeholder="Got a Question?"></input>
                
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