import React from 'react';
import '../App.scss';

import CardComp from '../comps/Announcement/CardComp';
import CardCompInput from '../comps/Announcement/CardCompInput';

export default {
    title: "CardComp",
    component: CardComp,

}

export const DefaultCardComp = () => {
    return <CardComp
        
    />

}

export const DefaultCardCompInput = () => {
    return <CardComp 
        input = {buttons}
    />
}

export const CardCompDisplay = () => {
    return <CardComp 
        buttons = {displayBut} 
        di = {display}
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

var displayBut = [
    {
        buttonText:"+",
        OnClick:()=>{alert('OpensInput')},
        display: true,
        
    }
]

var display = [
    {
        display: false,
        dispText: "Field trip Tomorrow!",
        dispContent: "Please bring for ...."
    },
    {
        display: false,
        dispText: "Field trip Tomorrow!",
        dispContent: "Please bring for ...."
    }
]