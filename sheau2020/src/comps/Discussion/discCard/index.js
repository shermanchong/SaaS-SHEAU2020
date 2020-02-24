import React from 'react'
import But from '../../But'
import Message from '../Message/index'

function DiscCard({ buttons, threads, comment }) {




    return (
        <div class="discComp" >
             {threads.map((o, i) => {
                        return <Message {...o}
                        comment={comment} />
                    })}
        </div>

    )


}


export default DiscCard;