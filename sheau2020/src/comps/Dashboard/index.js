import React, { useState } from 'react';
import Nav from '../Nav/index';
import ClassLeft from '../Dashboard/ClassLeft';
import ClassRight from '../Dashboard/ClassRight';
import Dropdown from '../Dropdown';



function Dashboard() {

    const [home, setHome] = useState(false);
    const [docs, setDocs] = useState(true);
    const [up, setUp] = useState(false);
    const [ima, setIma] = useState(false);

    var im = 'hide';
    var txt = 'preTxt';

    if(ima){
        im =  'imgPre';
    }


    if (docs == true) {
        return (
            <div class="dashCont">

                <div class="dashNav">
                    <Nav
                        SetDocs={setDocs}
                    />
                </div>
                <div class="docsBody">
                    <div class="dashTop">
                        <h3> Documents</h3>
                    </div>
                    <div class="dashBot">
                        <div class="docLeft">
                            <Dropdown
                                caption={'Zoo Field Trip Form'}
                            />
                            <Dropdown
                                caption={'Hot Lunch Orders'}
                            />
                            <Dropdown
                                caption={'Photo Waiver'}
                            />
                            <Dropdown
                                add={true}
                                setIma={setIma}
                            />
                        </div>
                        <div class="docRight">
                            <div class="preview">Preview of Document</div>
                            <div class="preCont">
                                <div class={txt}>You can preview your document once a file is uploaded.</div>
                                <img class={im} src={require('../../images/file.png')} />
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )
    } else if (up == true) {
        return (
            <div class="dashCont">

                <div class="dashNav">
                    <Nav
                        SetUp={setUp}
                    />
                </div>
                <div class="dashBody">
                    <div class="bodyLeft">
                        <ClassLeft />
                    </div>
                    <div class="bodyRight">
                        <ClassRight />
                    </div>

                </div>

            </div>

        )
    } else if (home == true) {
        return (
            <div class="dashCont">

                <div class="dashNav">
                    <Nav
                        SetHome={setHome}

                    />
                </div>
                <div class="dashBody">
                    <div class="bodyLeft">
                        <ClassLeft />
                    </div>
                    <div class="bodyRight">
                        <ClassRight />
                    </div>

                </div>

            </div>

        )
    }
}



export default Dashboard;

