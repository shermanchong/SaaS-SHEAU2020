import React, { useState } from 'react';
import CardComp from '../../Announcement/CardComp/index';
import CardCompInput from '../../Announcement/CardCompInput/index';

import DiscCard from '../../Discussion/discCard';
import DiscCardInput from '../../Discussion/discCardInput'

function ClassLeft() {

    const [an, setAn] = useState(false);
    const [anD, setAnD] = useState(false);

    var buttons = [
        {
            buttonText: "Submit",
            active: false
        }
    ]


    var display = [
        {
            display: false,
            dispText: "Field trip Tomorrow!",
            dispContent: "Please remember to arrive at school before 9:00am, bus will leave at 9:30am"
        },
        {
            display: false,
            dispText: "Field Trip Schedule",
            dispContent: "Field trip schedule posted down below: 9:30 - 10:00 Arrive at destination 10:15 - 12:00 Crafts down at the beach 12:00 - 12:45 Lunch picnic 1:00 - 2:00 Story time 2:15 - 3:45 Heading back to school "
        }
    ]
    var threads = [
        {
            name: "Anna",
            time: "20 hours ago",
            reply: "How long would the kids be outdoors for? Would they need to pack sunscreen?",
            right: false,
            first: true
        },
        {
            name: "Steve",
            time: "5 hours ago",
            reply: "Yes please bring sunscreen!",
            right: true,
            first: false
        },
        {
            name: "Anna",
            time: "20 hours ago",
            reply: "How long would the kids be outdoors for? Would they need to pack sunscreen?",
            right: true,
            first: false
        },
        {
            name: "Steve",
            time: "5 hours ago",
            reply: "Yes please bring sunscreen!",
            right: true,
            first: false
        },
        {
            name: "Anna",
            time: "20 hours ago",
            reply: "How long would the kids be outdoors for? Would they need to pack sunscreen?",
            right: true,
            first: false
        },
        {
            name: "Steve",
            time: "5 hours ago",
            reply: "Yes please bring sunscreen!",
            right: true,
            first: false
        },

    ]

    if (an == true) {
        if (anD == true) {
            return (
                <div class="left" >
                    <div>
                        <CardComp
                            SetAnD={setAnD}
                            di={display}
                            SetAn={setAn}
                        />
                    </div>

                    <div >
                        <DiscCard
                            threads={threads}
                        />
                    </div>
                    <div >
                        <DiscCardInput
                        buttons={buttons}
                         />
                    </div>


                </div>
            )
        } else {
            return (
                <div class="left" >
                    <div>
                        <CardCompInput
                            buttons={buttons}
                            SetAnD={setAnD}
                        />
                    </div>

                    <div onClick={() => {
                        setAn(false);
                    }}>
                        <DiscCard
                            threads={threads}
                        />
                    </div>
                    <div onClick={() => {
                        setAn(false);
                    }}>
                        <DiscCardInput
                            buttons={buttons}
                        />
                    </div>


                </div>
            )
        }

    } else {
        return (
            <div class="left"  >

                <CardComp
                    SetAn={setAn}


                />
                <DiscCard
                    threads={threads}
                />

                <DiscCardInput
                buttons={buttons} />
            </div>
        )
    }
}

export default ClassLeft;