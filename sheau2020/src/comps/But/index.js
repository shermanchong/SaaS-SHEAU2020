import React from 'react'

function But({buttonText, active}){
var cn = "normBut"

    if(active){
        cn = 'subBut'
      }

    return(
        <button class={cn}>{buttonText}</button>
    )
}

But.defaultProps ={
buttonText: "Submit"
}

export default But;