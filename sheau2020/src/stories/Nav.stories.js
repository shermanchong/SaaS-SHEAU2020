import React from 'react';
import NavCard from '../comps/Nav/NavCard/';
import Nav from '../comps/Nav';


export default {
    title: "Nav",
    component: NavCard,

}

export const DefaultNavCard = () =>{
       return <NavCard />
}

export const DefaultNav = () =>{
        return <Nav/>
}


var active = {
    active: true
}