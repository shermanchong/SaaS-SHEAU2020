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

export const DiscCompInputWithButtons = () => {
     return <DiscCardInput
          buttons = {buttons}
          />
}

export const CommentInputWithDropdown = () => {
     return <DiscCardInput
          names = {names}
          comments = {comments}
          buttons = {buttons}
          />
}

export const DefaultDiscComp = () => {
     return <DiscCard
          threads={threads}
     />
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

var names = [
     {
          name: "Andy"
     },
     {
          name: "Jessie"
     },
     {
          name: "Liz"
     },
     {
          name: "Jeff"
     },
     {
          name: "Tom"
     },
     {
          name: "Sally"
     },
]

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