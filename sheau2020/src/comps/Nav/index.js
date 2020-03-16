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
             <div class='addClass' >
                 <div class="class">
                     Class A
                 </div>
                <h3 class="caption" onClick={() => {
            }}>Add Class +</h3>
            </div>
            <NavCard
                caption={'Documents'}
                SetDocs = {SetDocs}
            />
            <NavCard
                caption={'Upgrade'}
                SetUp = {SetUp}
            />
           

            <div class="dp logout">
                <h3>Logout</h3>
            </div>

        </div>

    )
}

export default Nav;