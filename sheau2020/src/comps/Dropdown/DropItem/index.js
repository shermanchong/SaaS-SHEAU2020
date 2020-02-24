import React from 'react';
import But from '../../But/index';

function DropItem({ itemTitle, OnClick, active, set, caption, button }) {

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

          />
        </div>

      </div>
    )
  } else {
    return (
      <div className={cn} onClick={() => {

      }}>
        <a href={require('../../../images/1.jpg')}>{caption}</a>
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