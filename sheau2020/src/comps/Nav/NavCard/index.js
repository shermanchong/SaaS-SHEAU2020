import React, { useState } from 'react';

function NavCard({caption,SetHome,SetDocs, SetUp}) {

    const [active, setActive]= useState(false);
    
    var card = 'cardCont';
    
    if (SetHome) {
        card = "cardCont cardContActive";
       
    }
    if (SetDocs){
        card = "cardCont cardContActive";
      
    }
    if (SetUp){
        card = "cardCont cardContActive";
     
    }


    return (
        <div class={card} onClick={()=>{
          }}>
            <img src={require('../../../images/message.jpg')} width="50px"></img>
            <h3 class="caption">{caption}</h3>
        </div>
    )
}

NavCard.defaultProps = {
    active: false
}

export default NavCard;