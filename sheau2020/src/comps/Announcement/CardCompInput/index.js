import React from 'react'
import But from '../../But'
import DatePicker from 'react-date-picker'
import Content from '../CardComp/Content'


function CardCompInput({ buttons, di, SetAnD }) {



    return (
        <div class="cardComp">
            <DatePicker class="cardLeft" />
            <div class="cardCRight">
                <div class="schCont">
                    <div class="schedule">Schedule</div>
                    <select class="lists">
                        <option>January</option>
                        <option>Ferbuary</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>August</option>
                        <option>September</option>
                        <option>October</option>
                        <option>November</option>
                        <option>December</option>
                    </select>

                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                        <option>13</option>
                        <option>14</option>
                        <option>15</option>
                        <option>16</option>
                        <option>17</option>
                        <option>18</option>
                        <option>19</option>
                        <option>20</option>
                        <option>21</option>
                        <option>22</option>
                        <option>23</option>
                        <option>24</option>
                        <option>25</option>
                        <option>26</option>
                        <option>27</option>
                        <option>28</option>
                        <option>29</option>
                        <option>30</option>
                        <option>31</option>

                    </select>
                </div>
                <input class="header" placeholder="Title"></input>
                <textarea class="contents" placeholder="Message"></textarea>

                <div className="buttons">
                   
                    {buttons.map((o, i) => {
                        return <But {...o} OnClick={() => {
                            SetAnD(true);
                        }} />
                    })}
                     <select>
                        <option>Pin for 1 day</option>
                        <option>Pin for 1 week</option>
                        <option>Pin for 2 weeks</option>
                        <option>Pin for 1 month</option>
                        
                    </select>
                </div>

            </div>
        </div>

    )


}

CardCompInput.defaultProps = {
    buttons: [
        {
            buttonText: "Button 1",
            active: true,

        },

    ],

    di: [
        {
            display: false,
            dispText: "Field trip Tomorrow!",
            dispContent: "Please bring the following...",
        }
    ]
}
export default CardCompInput;