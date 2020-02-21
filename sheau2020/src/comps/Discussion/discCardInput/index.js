import React from 'react'
import But from '../../But'
import Dropdown from '../../Dropdown'

function DiscCardInput({ buttons, di, OnClick, }) {

    var names = [
        {
            itemTitle: "Everyone"
        },
        {
            itemTitle: "Jessie"
        },
        {
            itemTitle: "Liz"
        },
        {
            itemTitle: "Jeff"
        },
        {
            itemTitle: "Tom"
        },
        {
            itemTitle: "Sally"
        },
    ];

    var comments = [
        {
            itemTitle: "Follows directions",
            OnClick: () => { alert('follows directions') },
            active: false
        },
        {
            itemTitle: "Works diligently",
            OnClick: () => { alert('follows directions') },
            active: false
        },
        {
            itemTitle: "Respectful to his peers",
            OnClick: () => { alert('follows directions') },
            active: false
        },
        {
            itemTitle: "Great Listener",
            OnClick: () => { alert('follows directions') },
            active: false
        },
        {
            itemTitle: "Plays well with others",
            OnClick: () => { alert('follows directions') },
            active: false
        },
    ];

    if (buttons) {

        return (
            <div class="discCard">
                <div class="cardLeft">
                    <img src={require('../../../images/message.jpg')} alt="icon" class="images" />
                </div>
                <div class="cardRight">
                    <div class="drops">
                        <p class="at">@</p>
                        <select class="lists">
                            <option>Everyone</option>
                            <option>Jessie</option>
                            <option>Liz</option>
                            <option>Jeff</option>
                            <option>Tom</option>
                            <option>Sally</option>
                        </select>
                        
                        <select>
                            <option>Follows directions</option>
                            <option>Works diligently</option>
                            <option>Respectful to his peers</option>
                            <option>Great Listener</option>
                            <option>Plays well with others</option>
                        </select>
                    </div>
                    <input class="question" placeholder="Got a Question?"></input>

                    <div className="buttons">
                        {buttons.map((o, i) => {
                            return <But {...o}
                            />
                        })}
                    </div>

                </div>
            </div>

        )
    }
    else if (names) {
        return (
            <div class="discCard">
                <div class="cardLeft">
                    <img src={require('../../../images/message.jpg')} alt="icon" class="images" />
                </div>
                <div class="cardRight">


                    <input class="question" placeholder="Got a Question?"></input>

                    <div className="buttons">
                        {buttons.map((o, i) => {
                            return <But {...o}
                            />
                        })}
                    </div>

                </div>
            </div>

        )

    }


    else {
        return (
            <div class="discCard">
                <div class="cardLeft">
                    <img src={require('../../../images/message.jpg')} alt="icon" class="images" />
                </div>
                <div class="cardRight">
                    <input class="question" placeholder="Got a Question?"></input>

                </div>
            </div>

        )
    }




}

export default DiscCardInput;