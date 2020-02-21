import React from 'react';
import Dropdown from '../comps/Dropdown/index';

export default {
    title: "Dropdown",
    component: Dropdown,

}

export const DefaultDropdown = () => {
    return <Dropdown/>
}

export const DropdownList = () => {
    return <Dropdown
           items={comments} 
            />
}




var comments = [
    {
        itemTitle: "Follows directions",
        OnClick:()=>{alert('follows directions')},
        active: false
    },
    {
        itemTitle: "Works diligently",
        OnClick:()=>{alert('follows directions')},
        active: false
    },
    {
        itemTitle: "Respectful to his peers",
        OnClick:()=>{alert('follows directions')},
        active: false
    },
    {
        itemTitle: "Great Listener",
        OnClick:()=>{alert('follows directions')},
        active: false
    },
    {
        itemTitle: "Plays well with others",
        OnClick:()=>{alert('follows directions')},
        active: false
    },
]