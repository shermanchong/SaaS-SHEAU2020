import React from 'react'
import But from '../../But/index'

function Message({ buttons, name, time, reply, right, first, comment }) {

    var r = "threadCont";
    var re = 'thread'

    if (right) {
        r = "threadReply";
        re = 'thread reply';

    }

    if(comment){
        re = "comCont"
    }

    return (
        <div class={r}>
            <div class={re}>
                <div class="cardLeft">
                    <img src={require('../../../images/message.jpg')} alt="icon" class="images" />
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
                            return <But {...o}
                                first={first} />
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
            buttonText: 'Reply',
            OnClick: () => { alert('replies') },
            active: true
        },
        {

            buttonText: "Like",
            OnClick: () => { alert('Like') },
        },

    ],

    threads: [
        {

        }
    ]
}

export default Message;


