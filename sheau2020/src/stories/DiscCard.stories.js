import React from 'react';
import DiscCardInput from '../comps/Discussion/discCardInput';
import DiscCard from '../comps/Discussion/discCard';
import FileDrop from '../comps/FileDrop';
import ImgCarousel from '../comps/Carousel'

export default {
    title: "DiscCard",
    component: DiscCardInput,

}

export const DefaultDiscCompInput = () => {
     return <DiscCardInput/>
}

export const DiscCompInputWithButtons = () => {
     return <DiscCardInput
          buttons = {buttons}
          />
}

export const CommentInputWithDropdown = () => {
     return <DiscCardInput
          drop = {drop}
   
          />
}

export const DefaultDiscComp = () => {
     return <DiscCard
          threads={threads}
     />
}

export const DefaultFileDrop = () => {
     return <FileDrop
     
     />
}

export const DefaultCarousel = () =>{
     return <ImgCarousel/>
}



var buttons = [
     {
         buttonText: "Reply",
         OnClick:()=>{alert('Replies')},
         active: true
     },
     {
         buttonText: "Likes",
         OnClick:()=>{alert('Likes')},
         
         
     },
     
 ]

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

var drop = {
     drop: true
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