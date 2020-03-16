import React, { useState } from 'react'
import But from '../../But'
import Message from '../Message/index'
import DiscCardInput from '../discCardInput/'

function DiscCard({ buttons, threads, comment }) {

    const [drop, setDrop] = useState(false);
   

    var cn = 'annCont dropdown ';
    if (drop) {
        cn = 'annCont dropdown dropdown_active'
    }

   
        return (
            <div class='discComp' onClick={() => {
                setDrop(!drop)
            }}>

                <div class={cn}  >

                    {threads.map((o, i) => {
                        return <Message {...o}
                            comment={comment}
                            
                            />
                    })}
                    <DiscCardInput />
                </div>
            </div>

        )
  



}


export default DiscCard;