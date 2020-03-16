import React, { useState } from 'react';

function NavCard({ caption, onClick, SetHome, SetDocs, SetUp,home, docs,up }) {

    const [active, setActive] = useState(false);

    var card = 'cardCont';
    var home = 'hide';
    var docs = 'hide';
    var upgrade = 'hide';

    if(caption == 'Home'){
        home = '';
    }

    if(caption == 'Documents'){
        docs = '';
    }

    if(caption == 'Upgrade'){
        upgrade = '';
    }

    if (home==true) {
        card = "cardCont cardContActive";

    }

    if (docs==true) {
        card = "cardCont cardContActive";

    }
    if (up==true) {
        card = "cardCont cardContActive";

    }


    return (
        <div class={card} onClick={onClick}>
            <img class={home} src={require('../../../images/home.png')} width="50px" />
            <img class={docs} src={require('../../../images/docs.png')} width="50px" />
            <img class={upgrade} src={require('../../../images/upgrade.png')} width="50px" />
            <h3 class="caption">{caption}</h3>
        </div>
    )
}

NavCard.defaultProps = {
    active: false
}

export default NavCard;