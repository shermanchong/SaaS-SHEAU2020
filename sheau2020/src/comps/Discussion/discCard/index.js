import React from 'react'
import But from '../../But'
import Message from '../Message/index'

function DiscCard({ buttons, threads }) {



    return (
        <div class="discComp">
             {threads.map((o, i) => {
                        return <Message {...o} />
                    })}
        </div>

    )


}


export default DiscCard;