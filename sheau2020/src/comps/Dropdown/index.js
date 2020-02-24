import React, { useState } from 'react';
import DropItem from './DropItem'


function Dropdown({ items, menuTitle, children, dropdown, caption, add }) {

  const [drop, setDrop] = useState(false);
  const [title, setTitle] = useState(caption);

  var cn = 'dropmenu';

  if (drop == true) {
    cn = 'dropmenu dropmenu_active'
    return (
      <div className='menu' onClick={() => {
        setDrop(!drop)
      }}>
        <h1>{title}</h1>
        {children}

        <div id='item_cont' className={cn}>
          {items.map((o, i) => {
            return <DropItem {...o}
              set={setTitle}
              caption={caption}
            />
          })}
        </div>
      </div>
    )
  } else if (add) {
    return (
      <div className='menu' onClick={() => {
        setDrop(!drop)
      }}>
        <h1>{title}</h1>
        {children}

        <div id='item_cont' className='dropmenu dropmenu_active'>
          {items.map((o, i) => {
            return <DropItem {...o}
              set={setTitle}
              button={true}
            />
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div className='menu' onClick={() => {
        setDrop(!drop)
      }}>
        <h1>{title}</h1>
        {children}

        <div id='item_cont' className={cn}>
          {items.map((o, i) => {
            return <DropItem {...o}
              set={setTitle}
              caption={caption}
            />
          })}
        </div>
      </div>
    )
  }




}

Dropdown.defaultProps = {
  items: [{
    itemTitle: 'item1'
  }],
  menuTitle: 'default title',
  children: null,
  dropdown: false
}

export default Dropdown;