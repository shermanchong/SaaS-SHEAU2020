import React, { useState } from 'react';
import NavCard from '../Nav/NavCard';

function Nav() {

    const [home, setHome] = useState(true);
    const [docs, setDocs] = useState(true);
    const [up, setUp] = useState(true);


    return (

        <div>
            <div class="dp">
                <img src={require('../../images/dp.jpg')} />
                <h3 class="dpName">Ms. Stephanie</h3>
            </div>

            <NavCard
                caption={'Home'}
            />
            <NavCard
                caption={'Documents'}
            />
            <NavCard
                caption={'Upgrade'}
            />
            <div class='add' onClick={() => {
            }}>
                <img src={require('../../images/message.jpg')} width="50px"></img>
                <h3 class="caption">Add Class</h3>
            </div>

            <div class="dp">
                <h3 class="dpName">Logout</h3>
            </div>

        </div>

    )
}

export default Nav;