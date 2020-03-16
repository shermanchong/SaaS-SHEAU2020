import React, { useState } from 'react';
import Nav from '../Nav/index';
import ClassLeft from '../Dashboard/ClassLeft';
import ClassRight from '../Dashboard/ClassRight';
import Dropdown from '../Dropdown';
import List from '../List/';
import But from '../But';


function Dashboard() {

    const [home, setHome] = useState(true);
    const [docs, setDocs] = useState(false);
    const [up, setUp] = useState(false);

    const [unlock, setUnlock] = useState(false);

    const [promo, setPromo] = useState(false);
    const [open, setOpen] = useState(false);
    const [ima, setIma] = useState(false);
    const [pa, setPa] = useState(false);
    const [conf, setConf] = useState(false);


    var im = 'hide';
    var txt = 'preTxt';
    var ad = 'hide';
    var pay = 'hide';
    var con = 'hide';



    if (ima) {
        im = 'imgPre';
        txt = 'hide';
    }

    if (promo) {
        ad = 'ad';
    }

    if (pa) {
        pay = 'paymentCont'
    }

    if (conf) {
        con = 'ad'
    }

    if (docs == true) {
        return (

            <div class="dashCont">
                <div class={ad} onClick={() => {
                    setPromo(!promo)
                }}>
                    <div class="advert">
                        <div>
                            <img class="adIcon" src={require('../../images/upgrade.png')} />
                        </div>
                        <div class="adBot">
                            <div class="adT">Upgrade to Premium</div>
                            <div class="adTx">Unlock all features today <br />with Homeroom Premium.</div>
                            <But
                                OnClick={() => {
                                    setUp(true)
                                    setHome(false)
                                    setDocs(false)
                                }}
                                buttonText={'Upgrade'}
                                upgrade={true}

                            />
                        </div>

                    </div>
                </div>
                <div class="dashNav">
                    <Nav
                        SetDocs={setDocs}
                        SetUp={setUp}
                        SetHome={setHome}

                        unlock={unlock}
                        setPromo={setPromo}

                        home={home}
                        docs={docs}
                        up={up}
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
                <div class={ad} onClick={() => {
                    setPromo(!promo)
                }}>
                    <div class="advert">
                        <div>
                            <img class="adIcon" src={require('../../images/upgrade.png')} />
                        </div>
                        <div class="adBot">
                            <div class="adT">Upgrade to Premium</div>
                            <div class="adTx">Unlock all features today <br />with Homeroom Premium.</div>
                            <But
                                OnClick={() => {
                                    setUp(true)
                                    setHome(false)
                                    setDocs(false)
                                    setPromo(false)
                                }}
                                buttonText={'Upgrade'}
                                upgrade={true}

                            />
                        </div>

                    </div>
                </div>

                <div class={con} onClick={() => {
                    setPromo(!promo)
                }}>
                    <div class="advert">
                        <div>
                            <img class="adIcon" src={require('../../images/checkL.png')} />
                        </div>
                        <div class="adBot">
                            <div class="adT">Payment Complete</div>
                            <div class="adTx">We’ve sent you an email with the details of your order.</div>
                            <But
                                OnClick={() => {
                                    setUp(false)
                                    setHome(true)
                                    setDocs(false)
                                    setPromo(false)
                                    setConf(false)
                                }}
                                buttonText={'Go to Dashboard'}
                                upgrade={true}

                            />
                        </div>

                    </div>
                </div>

                <div class="dashNav">
                    <Nav

                        SetDocs={setDocs}
                        SetUp={setUp}
                        SetHome={setHome}

                        unlock={unlock}
                        setPromo={setPromo}

                        home={home}
                        docs={docs}
                        up={up}
                    />
                </div>
                <div class="upgradeCont">
                    <div class={pay}>
                        <div class="priceTop">
                            <div class='paymentTop'>
                                <div class='product'>Upgrade Homeroom to Premium</div>
                            </div>
                            <div class="paymentBot">
                                <div class="botLeft">
                                    <div class="features">Card Information</div>
                                    <form class="paymentForm">
                                        <caption>Name</caption>
                                        <input class="input"></input>
                                        <caption>Card Number</caption>
                                        <input class="input"></input>
                                        <div class="cardInfo">
                                            <div class="expire">
                                                <caption>Expiration</caption>
                                                <input style={{ width: '50px' }}></input>/<input style={{ width: '50px' }}></input>
                                            </div>

                                            <div class="cvv">
                                                <caption>CVV</caption>
                                                <input style={{ width: '50px' }}></input>
                                            </div>
                                        </div>
                                        <div class="features">Billing Address</div>
                                        <caption>Street Address</caption>
                                        <input class="input"></input>
                                        <caption>City</caption>
                                        <input class="input"></input>
                                        <caption>Province</caption>
                                        <input class="input"></input>
                                        <caption>Postal Code</caption>
                                        <input class="input"></input>
                                    </form>
                                </div>
                                <div class="botRight">
                                    <div class="border">
                                        <div class="botBorder">
                                            <div class="botTitle">Homeroom Premium</div>
                                            <div class="botTxt">$2.99/ Month</div>
                                        </div>
                                        <div class="botPrice">
                                            <div class="total">Total</div>
                                            <div class="total margin">$2.99CAD</div>
                                        </div>
                                    </div>
                                    <But
                                        OnClick={() => {
                                            setPa(false)
                                            setConf(true)
                                            setPromo(false)
                                            setUnlock(true)
                                        }}
                                        buttonText={'Complete Purchase'}
                                        upgrade={true}

                                    />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="priceLeft">
                        <div class="priceTop">
                            <div class="product">Free</div>
                            <div class="price">$0/ Month</div>
                        </div>
                        <div class="priceBot">
                            <div class="features">Features</div>
                            <List
                                listText={'Make Announcements'}
                            />
                            <List
                                listText={'Answer questions'}
                            />
                            <List
                                listText={'Post 3 photos per day'}
                            />
                            <List
                                listText={'Add comments'}
                            />
                            <List
                                listText={'Upload documents'}
                            />
                            <List
                                listText={'Make Announcements'}
                            />
                            <List
                                listText={'Make Announcements'}
                            />
                        </div>

                    </div>
                    <div class="priceRight">
                        <div class="priceTop">
                            <div class="product">Premium</div>
                            <div class="price">$2.99/ Month</div>
                        </div>
                        <div class="priceBot">
                            <div class="features">Features</div>
                            <List
                                listText={'Make Announcements'}
                            />
                            <List
                                listText={'Answer questions'}
                            />
                            <List
                                listText={'Post 3 photos per day'}
                            />
                            <List
                                listText={'Add comments'}
                            />
                            <List
                                listText={'Upload documents'}
                            />
                            <List
                                listText={'Schedule Announcements'}
                            />
                            <List
                                listText={'Post Unlimited Photos Daily'}
                            />
                            <But
                                buttonText={'Upgrade'}
                                upgrade={true}
                                OnClick={() => {
                                    setPa(true)
                                }}
                            />
                        </div>
                    </div>

                </div>

            </div>

        )
    } else if (home == true) {
        return (
            <div class="dashCont">
                <div class={ad} onClick={() => {
                    setPromo(!promo)
                }}>
                    <div class="advert">
                        <div>
                            <img class="adIcon" src={require('../../images/upgrade.png')} />
                        </div>
                        <div class="adBot">
                            <div class="adT">Upgrade to Premium</div>
                            <div class="adTx">Unlock all features today <br />with Homeroom Premium.</div>
                            <But
                                OnClick={() => {
                                    setUp(true)
                                    setHome(false)
                                    setDocs(false)
                                }}
                                buttonText={'Upgrade'}
                                upgrade={true}

                            />
                        </div>

                    </div>
                </div>
                <div class="dashNav">
                    <Nav

                        SetDocs={setDocs}
                        SetUp={setUp}
                        SetHome={setHome}
                        unlock={unlock}
                        setPromo={setPromo}

                        home={home}
                        docs={docs}
                        up={up}
                    />
                </div>
                <div class="dashBody">
                    <div class="bodyLeft">
                        <ClassLeft
                            setPromo={setPromo}
                            unlock={unlock}

                        />
                    </div>
                    <div class="bodyRight">
                        <ClassRight
                            setPromo={setPromo}
                            unlock={unlock}

                        />
                    </div>

                </div>

            </div>

        )
    }
}



export default Dashboard;

