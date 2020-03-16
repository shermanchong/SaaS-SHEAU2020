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
        }} class={cn} style={{ backgroundColor: color }}>
            <div class="headerCont">
                <div class="header">{dispText}<img class="icon" src={require("../../../../images/drop.png")} /></div>
            </div>

            <div class="contents">{dispContent}</div>
        </div>

    )


}




export default Content;