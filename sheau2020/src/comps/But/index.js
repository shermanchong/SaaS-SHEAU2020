import React from 'react'

function But({buttonText, active,display, OnClick, first,color,setReply,upgrade}){
var cn = "normBut"

    if(upgrade){
        cn = "upgradeBut"
    }

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
        <button style={{backgroundColor:color}} class={cn} onClick={OnClick}>{buttonText}</button>
    )
}

But.defaultProps ={
buttonText: "Submit"
}

export default But;