import React,{useState} from 'react';
import DropItem from './DropItem'


function Dropdown({items, menuTitle, children, dropdown, caption}) {

const [drop, setDrop] = useState(false);
const [title, setTitle] = useState(caption);

var cn = 'dropmenu';
if(drop){
  cn = 'dropmenu dropmenu_active'
}

    return (
      <div className='menu' onClick={()=>{
        setDrop(!drop)
      }}>
        <h1>{title}</h1>
        {children}

        <div id='item_cont' className={cn}>
        {items.map((o,i)=>{
          return <DropItem {...o} 
                set={setTitle}
          />
        })}
        </div>
      </div>
    )
  }

Dropdown.defaultProps = {
  items:[{
    itemTitle:'item1'
  }, {
    itemTitle:'item2'
  }],
  menuTitle:'default title',
  children:null,
  dropdown:false
}

export default Dropdown;