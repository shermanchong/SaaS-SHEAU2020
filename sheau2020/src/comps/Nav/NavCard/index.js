import React, { useState } from 'react';

function NavCard({caption}) {

    const [active, setActive]= useState(false);
    
    var card = 'cardCont';
    
    if (active) {
        card = "cardCont cardContActive";
    }


    return (
        <div class={card} onClick={()=>{
            setActive(!active)}}>
            <img src={require('../../../images/message.jpg')} width="50px"></img>
            <h3 class="caption">{caption}</h3>
        </div>
    )
}

NavCard.defaultProps = {
    active: false
}

export default NavCard;