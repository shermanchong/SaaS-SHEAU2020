import React from 'react'

function Content({ di, dispText, dispContent }) {

    return (
        <div class="cardRight">
            <div class="header">{dispText}</div>
            <div class="contents">{dispContent}</div>
        </div>

    )


}




export default Content;