import React from 'react'
import But from '../../But'
import Dropdown from '../../Dropdown'

function DiscCardInput({ buttons, di, OnClick, drop, SetCom, Com,  }) {

    if (drop) {
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


                    <input class="question" placeholder="Leave a Comment"></input>

                    <div className="buttons">
                       
                       <But
                        buttonText={'Update'}
                        active = {true}
                        first ={true}
                        OnClick ={ () =>{
                            SetCom(!Com);
                        }}
                       />
                       <But
                        buttonText={'Cancel'}
                        active = {false}
                        OnClick ={ () =>{
                            SetCom(!Com);
                        }}
                       />
                    </div>

                </div>
            </div>

        )

    } 

   else  if (buttons) {

      
            return (
                <div class="discCard">
                    <div class="cardLeft">
                        <img src={require('../../../images/message.jpg')} alt="icon" class="images" />
                    </div>
                    <div class="cardRight">

                        <input class="question" placeholder="Leave a Question"></input>

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
                    <input class="question" placeholder="Leave a Question"></input>

                </div>
            </div>

        )
    }




}



export default DiscCardInput;