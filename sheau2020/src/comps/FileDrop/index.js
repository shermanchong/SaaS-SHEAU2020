import React from 'react';

function FileDrop(){

    return(

        <div class="fileCont">
            <p class="fileTitle">Drag files to upload 
            <br/> or
            <br/>
            <br/>
            <div class="browse">Browse Files </div>

            </p>
            <input type="file" class="fileDrop" ></input>
        </div>

    )
}

export default FileDrop;