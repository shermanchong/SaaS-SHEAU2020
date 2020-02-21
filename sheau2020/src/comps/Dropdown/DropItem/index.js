import React from 'react'

function DropItem({itemTitle, OnClick, active, set}) {

  var cn = 'menu_item';


  if(active){
    cn = 'menu_item menu_items_active'
  }

  return (
    <div className={cn} onClick={()=>{
        set(itemTitle)
      }}>
      {itemTitle}
    </div>
  )
}

DropItem.defaultProps = {
  itemTitle:'default item',
  OnClick:()=>{},
  active:false,
}

export default DropItem;