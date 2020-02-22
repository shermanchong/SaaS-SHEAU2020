import React from 'react';
import CardComp from '../../Announcement/CardComp/index';
import DiscComp from '../../Discussion/discCard';

function ClassLeft() {

    var threads = [
        {
            name: "Anna",
            time: "20 hours ago",
            reply: "How long would the kids be outdoors for? Would they need to pack sunscreen?",
            right: false
        },
        {
            name: "Steve",
            time: "5 hours ago",
            reply: "Yes please bring sunscreen!",
            right: true
        },
        {
            name: "Anna",
            time: "20 hours ago",
            reply: "How long would the kids be outdoors for? Would they need to pack sunscreen?",
            right: true
        },
        {
            name: "Steve",
            time: "5 hours ago",
            reply: "Yes please bring sunscreen!",
            right: true
        },
        {
            name: "Anna",
            time: "20 hours ago",
            reply: "How long would the kids be outdoors for? Would they need to pack sunscreen?",
            right: true
        },
        {
            name: "Steve",
            time: "5 hours ago",
            reply: "Yes please bring sunscreen!",
            right: true
        },

    ]

    return (
        <div class="left">
            <CardComp />
            <DiscComp
                threads={threads}
            />
        </div>
    )
}

export default ClassLeft;