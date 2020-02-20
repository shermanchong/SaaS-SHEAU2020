import React from 'react'
import But from '../../But/index'

function Message({ buttons, name, time, reply, threads }) {
    return (
        <div class="threadCont">
            <div class="thread">
                <div class="cardLeft">
                    <img src="sheau2020\src\images\message.jpg" />
                </div>
                <div class="cardRight">
                    <div class="details">
                        <div class="user">{name}</div>
                        <div class="time">{time}</div>
                    </div>
                    <div class="messages">
                        {reply}
                </div>

                    <div className="buttons">
                        {buttons.map((o, i) => {
                            return <But {...o} />
                        })}
                    </div>

                </div>
            </div>
        </div>

    )
}

Message.defaultProps = {
    buttons: [

        {

            buttonText: "Like",
            OnClick: () => { alert('Like') },
        }, {
            buttonText: 'Reply',
            OnClick: () => { alert('replies') },
        },

    ],

    threads: [
        {
           
        }
    ]
}

export default Message;


