import React from 'react'
import But from '../../But'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import Content from '../CardComp/Content'



function CardComp({ buttons, di, input, SetAn }) {

    if (di) {

        return (
            <div class="cardComp">
                <div class='cardLeft'>
                    <div class="month">January</div>
                    <div class="day">27</div>
                    
                </div>
                <div class="cardRight">

                    <div class="displayCont">
                        {di.map((o, i) => {
                            return <Content {...o} />
                        })}
                    </div>

                    <div className="buttons">
                        {buttons.map((o, i) => {
                            return <But {...o} />
                        })}
                    </div>

                </div>
            </div>

        )



    } else if (input) {
        return (

            <div class="cardComp">
               <div class='cardLeft'>
                    <div class="month">January</div>
                    <div class="day">27</div>
                    
                </div>
                <div class="cardRight">
                    <input class="header" placeholder="Title"></input>
                    <textarea class="contents" placeholder="Message"></textarea>

                    <div className="buttons">
                        {input.map((o, i) => {
                            return <But {...o} />
                        })}
                    </div>

                </div>
            </div>
        )
    }

    else {
        return (
            <div class="cardComp">
               <div class='cardLeft'>
                    <div class="month">January</div>
                    <div class="day">27</div>
                    
                </div>
                <div class="cardRight cardRightD">

                    <div class="title">Make an Announcement</div>
                    <div className="buttons">
                        {buttons.map((o, i) => {
                            return <But {...o} OnClick={()=>{
                                SetAn(true);
                              }} />
                        })}
                    </div>

                </div>
            </div>
        )
    }



}

CardComp.defaultProps = {
    buttons: [
        {
            buttonText: "+",
            display: true

        },

    ],


   
}
export default CardComp;