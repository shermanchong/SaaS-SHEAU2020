import React from 'react';
import But from '../../But/index';

function DropItem({ itemTitle, OnClick, active, set, caption, button, setIma, ima }) {

  var cn = 'menu_item';


  if (active) {
    cn = 'menu_item menu_items_active'
  }

  else if (button == true) {
    return (
      <div className={cn}>
        <div class="menuAdd">
          Select a File
        </div>

        <div class="menuBut">
          <But
            buttonText={'Add'}
            active={false}
            OnClick={()=>{
              setIma(!false);
            }}

          />
        </div>

      </div>
    )
  } else {
    return (
      <div className={cn} onClick={() => {

      }}>
        <a href={require('../../../images/1.jpg')}>{caption} </a>
        <But
          buttonText={'X'} />
      </div>
    )
  }


}

DropItem.defaultProps = {
  itemTitle: 'default item',
  OnClick: () => { },
  active: false,
}

export default DropItem;