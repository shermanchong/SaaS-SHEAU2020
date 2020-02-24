import React, { useState } from 'react';
import CardComp from '../../Announcement/CardComp/index';
import CardCompInput from '../../Announcement/CardCompInput/index';
import DiscCard from '../../Discussion/discCard';
import DiscCardInput from '../../Discussion/discCardInput'

function ClassLeft() {

    const [an, setAn] = useState(false);

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
        return (
            <div class="left" >
                <div>
                    <CardCompInput

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
                    <DiscCardInput />
                </div>


            </div>
        )
    } else {
        return (
            <div class="left"  >

                <CardComp
                    SetAn={setAn}
                />
                <DiscCard
                    threads={threads}
                />

                <DiscCardInput />
            </div>
        )
    }
}

export default ClassLeft;