import React, { useState } from 'react';
import ImgCarousel from '../../Carousel';
import DiscCard from '../../Discussion/discCard';
import DiscCardInput from '../../Discussion/discCardInput';
import But from '../../But';
import FileDrop from '../../FileDrop';

function ClassRight() {

    const [com, setCom] = useState(true);

    var drop = {
        drop: true
    }
    var displayBut = [
        {
            buttonText: "+",
            OnClick: () => { alert('OpensInput') },
            display: true,

        }
    ]

    var threads = [
        {
            name: "Ms. Stephanie",
            time: "3 hours ago",
            reply: "Guest speaker day! Today we brought in some guest speakers to interact with the children, live music and storytelling time! ",
            right: false,
            first: false
        }
    ]

    if (com == true) {

        return (
            <div class="right">
                <div class="top">
                    <div class="imgPre">
                        <img src={require('../../../images/1.jpg')}></img>
                   
                        <img src={require('../../../images/2.jpg')}></img>
                  
                        <img src={require('../../../images/3.jpg')}></img>
                    </div>
                    <FileDrop/>
                </div>

                <div class="bottom">
                    <div class="subTitle">
                        <h3>Teacher's Comment</h3>
                    </div>
                 
                    <DiscCardInput
                        drop={drop}
                        SetCom={setCom}
                        Com = {com}
                        
                    />
                </div>
                <div class="hide">
                    <But
                        class="but"
                        display={displayBut}
                        buttonText={'+'}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div class="right">
                <div class="top">
                    <ImgCarousel />
                </div>

                <div class="bottom">
                    <div class="subTitle">
                        <h3>Teacher's Comment</h3>
                    </div>
                    <DiscCard
                        margin="0px"
                        threads={threads}
                        comment ={true}
                    />
                   
                </div>
                <div class="footer">
                    <But
                        class="but"
                        display={displayBut}
                        buttonText={'+'}
                        OnClick = {() =>{
                            setCom(true);
                        }}
                    />
                </div>
            </div>
        )
    }
}



export default ClassRight;