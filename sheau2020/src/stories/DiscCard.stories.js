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
     />
}

