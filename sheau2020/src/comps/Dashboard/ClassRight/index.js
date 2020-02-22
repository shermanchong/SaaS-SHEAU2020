import React from 'react';
import ImgCarousel from '../../Carousel';
import DiscCardInput from '../../Discussion/discCardInput';

function ClassRight() {

    var drop = {
        drop: true
    }

    return (
        <div class="right">
            <ImgCarousel />
            <DiscCardInput
                drop={drop}
            />
        </div>
    )
}

export default ClassRight;