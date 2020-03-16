import React,{useState} from 'react';

function FileDrop({unlock, setPromo}){


var fi = 'fileDrop';

if (unlock==true){
    fi = 'hide'
}
    return(

        <div class="fileCont">
            <p class="fileTitle">Drag files to upload 
            <br/> or
            <br/>
            <br/>
            <div class="browse">Browse Files </div>

            </p>
            <input type='file' class='fileDrop' ></input>
            <div  class={fi}  onClick={() => {
            setPromo(true)}}></div>
        </div>

    )
}

export default FileDrop;