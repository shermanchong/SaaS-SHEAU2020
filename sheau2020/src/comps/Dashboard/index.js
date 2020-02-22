import React from 'react';
import Nav from '../Nav/index';
import ClassLeft from '../Dashboard/ClassLeft';
import ClassRight from '../Dashboard/ClassRight';


function Dashboard() {

    return (
        <div class="dashCont">

            <div class="dashNav">
                <Nav />
            </div>
            <div class="dashBody">
                <div class="bodyLeft">
                    <ClassLeft/>
                </div>
                <div class="bodyRight">
                    <ClassRight/>
                </div>

            </div>

        </div>

    )
}

export default Dashboard;

