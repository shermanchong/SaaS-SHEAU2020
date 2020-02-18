import React from 'react'
import But from '../../But'
import DatePicker from 'react-date-picker'

function CardComp({buttons}) {

    return (
        <div class="cardComp">
            <DatePicker class="cardLeft" />
            <div class="cardRight">
                <input></input>
                <textarea class="contents"></textarea>
                <div id='item_cont' className="buttons">
                    {buttons.map((o, i) => {
                        return <But {...o} />
                    })}
                </div>

            </div>
        </div>

    )

}

export default CardComp;