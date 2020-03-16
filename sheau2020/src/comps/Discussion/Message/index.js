import React from 'react'
import But from '../../But/index'

function Message({ buttons, name, time, reply, right, first, comment,setReply }) {

    var r = "threadCont";
    var re = 'thread';
    var left = 'cardLeft';
    var circ = 'circle';
    var d = 'drop';

    if (right) {
        r = "threadReply";
        re = 'thread reply';
        left = '';
        circ = '';
        d = 'drop_off';
    }

    if(comment){
        re = "comCont"
    }

    return (
        <div class={r}>
            <div class={re}>
                <div class={left}>
                   <div class={circ}></div>
                </div>
                <div class="cardRight">
                   
                    <div class="messages">
                        {reply}
                    </div>

                    <div className="buttons">
                        
                        {buttons.map((o, i) => {
                            return <But {...o}
                                first={first}
                                 />
                        })}
                        <div class="time">{time}</div>
                    </div>

                </div>
                <div class={d}><img src={require("../../../images/drop.png")}/></div>
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


