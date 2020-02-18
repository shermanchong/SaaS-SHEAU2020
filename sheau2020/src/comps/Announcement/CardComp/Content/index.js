import React from 'react'

function Content({ di, dispText, dispContent }) {

    return (
        <div class="cardRight">
            <div class="header">{dispText}</div>
            <div class="contents">{dispContent}</div>
        </div>

    )


}


Content.defaultProps = {
    di: [
        {
            display: false,
            dispText: "Field trip Tomorrow!",
            dispContent: "Please bring the following...",
        }
    ]
}

export default Content;