import React from "react";
import {uploadFile} from "../../services/MaandProgrammaUploader";

export const Maandprogramma = () => {
    return (
        <input type={'file'} onChange={uploadFile}/>
    )
}