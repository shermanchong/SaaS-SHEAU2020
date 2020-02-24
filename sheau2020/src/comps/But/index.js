import React from 'react'

function But({buttonText, active,display, OnClick, first}){
var cn = "normBut"

    if(active){
        if(!first){
            cn = 'hide';
            
        } else{
            cn = 'subBut'
        }
        
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