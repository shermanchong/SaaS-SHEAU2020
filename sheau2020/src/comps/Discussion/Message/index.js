import React from 'react'
import But from '../../But/index'

function Message({ buttons }) {
    return (

        <div class="thread">
            <div class="cardLeft">
                <img></img>
            </div>
            <div class="cardRight">
                <div class="details">
                    <div class="user">Anna</div>
                    <div class="time">20 Hours Ago</div>
                </div>
                <div class="messages">
                    How long would the kids be outdoors for? Would they need to pack sunscreen?
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

Message.defaultProps = {
    buttons: [
        {
            buttonText: 'reply',
            OnClick: () => { alert('replies') },
        },
        {

            buttonText: "Preview",
            OnClick: () => { alert('Previews') },
        }

    ],

    di: [
        {
            display: false,
            dispText: "Field trip Tomorrow!",
            dispContent: "Please bring the following...",
        }
    ]
}

export default Message;


