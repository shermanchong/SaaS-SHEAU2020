import React, { useState } from 'react';
import NavCard from '../Nav/NavCard';

function Nav({SetHome,SetDocs,SetUp}) {

    


    return (

        <div class="nav">
            <div class="dp">
                <img src={require('../../images/dp.png')} />
                <h3 class="dpName">Ms. Stephanie</h3>
            </div>

            <NavCard
                caption={'Home'}
                SetHome = {SetHome}
            />
            <NavCard
                caption={'Documents'}
                SetDocs = {SetDocs}
            />
            <NavCard
                caption={'Upgrade'}
                SetUp = {SetDocs}
            />
            <div class='add' onClick={() => {
            }}>
                <img src={require('../../images/message.jpg')} width="50px"></img>
                <h3 class="caption">Add Class</h3>
            </div>

            <div class="dp logout">
                <h3>Logout</h3>
            </div>

        </div>

    )
}

export default Nav;