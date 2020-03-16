import React, { useState } from 'react'

function Content({ di, dispText, dispContent, color }) {

    const [drop, setDrop] = useState(false);

    var cn = 'cardRight dropdown ';
    if (drop) {
        cn = 'cardRight dropdown dropdown_active'
    }
    return (
        <div onClick={() => {
            setDrop(!drop)
        }} class='cardCRight' style={{ backgroundColor: 'white' }}>
            <div class="headerCont">
                <div class="header">{dispText}</div>
            </div>

            <div class="contents">{dispContent}</div>
        </div>

    )


}




export default Content;