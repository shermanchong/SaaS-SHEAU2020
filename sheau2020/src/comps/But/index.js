import React from 'react'

function But({buttonText, active,display, OnClick}){
var cn = "normBut"

    if(active){
        cn = 'subBut'
      } 
    else if(display){
        cn = 'displayBut'
    }

    return(
        <button class={cn} onClick={OnClick}>{buttonText}</button>
    )
}

But.defaultProps ={
buttonText: "Submit"
}

export default But;