import React from 'react';
import DiscCardInput from '../comps/Discussion/discCardInput';
import DiscCard from '../comps/Discussion/discCard';

export default {
    title: "DiscCard",
    component: DiscCardInput,

}

export const DefaultDiscCompInput = () => {
     return <DiscCardInput/>
}

export const DefaultDiscComp = () => {
     return <DiscCard
          threads={threads}
     />
}



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

]