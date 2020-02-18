import React from 'react';
import '../App.scss';

import CardComp from '../comps/Announcement/CardComp';

export default {
    title: "CardComp",
    component: CardComp,

}

export const DefaultCardComp = () => {
    return <CardComp />
}

export const CardCompInput = () => {
    return <CardComp 
        buttons = {buttons}
    />
}

var buttons = [
    {
        buttonText: "Create",
        OnClick:()=>{alert('Creates')},
        active: true
    },
    {
        buttonText: "Preview",
        OnClick:()=>{alert('Previews')},
        
    },
    
]