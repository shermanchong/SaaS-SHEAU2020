import React from 'react'
import But from '../../But'
import Message from '../Message/index'
import DiscCardInput from '../discCardInput/'

function DiscCard({ buttons, threads, comment }) {




    return (
        <div class="discComp" >
            <div class="annCont">
                {threads.map((o, i) => {
                    return <Message {...o}
                        comment={comment} />
                })}
                <DiscCardInput />
            </div>
        </div>

    )


}


export default DiscCard;