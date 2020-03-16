import React, { useState } from 'react';

function List({listText}) {

    return (

        <div class="listCont">
            <div>
                <img src={require('../../images/check.png')}/>
            </div>
            <div>{listText}</div>
        </div>
    )
}

export default List;