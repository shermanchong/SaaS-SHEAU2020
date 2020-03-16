import React, { useState } from 'react';
import NavCard from '../Nav/NavCard';

function Nav({SetHome,SetDocs,SetUp, unlock, setPromo,home,docs,up}) {

    var add = 'hide';

    if(unlock == true){
        add = 'class';
    }

    


    return (

        <div class="nav">
            <div class="dp">
                <img src={require('../../images/dp.png')} />
                <h3 class="dpName">Ms. Stephanie</h3>
            </div>

            <NavCard
                caption={'Home'}
                SetHome = {SetHome}
                home={home}
                onClick={()=>{
                    SetHome(true)
                    SetUp(false)
                    SetDocs(false)
                }}
            />
             <div class='addClass' >
                 <div class={add}>
                     Class A
                 </div>
                <h3 class="caption" onClick={() => {
                    setPromo(true)
            }}>Add Class +</h3>
            </div>
            <NavCard
                caption={'Documents'}
                SetDocs = {SetDocs}
                docs={docs}
                onClick={()=>{
                    SetHome(false)
                    SetUp(false)
                    SetDocs(true)
                }}
            />
            <NavCard
                caption={'Upgrade'}
                SetUp = {SetUp}
                up={up}
                onClick={()=>{
                    SetHome(false)
                    SetUp(true)
                    SetDocs(false)
                }}
            />
           

            <div class="dp logout">
                <h3>Logout</h3>
            </div>

        </div>

    )
}

export default Nav;