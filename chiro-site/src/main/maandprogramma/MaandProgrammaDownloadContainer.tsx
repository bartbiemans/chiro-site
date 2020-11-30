import React, {useState} from "react";
import {MaandprogrammaDownload} from "./MaandprogrammaDownload";
import {downloadFile} from "../../services/FileDownloader";

export const MaandProgrammaContainer = () => {
    const [fileNotPresent, setFileNotPresent] = useState('')
    const errorMessage = 'Er is nog geen maandprogramma voor uw afdeling';

    const handleDownLoadFile = (title: string) => {
            downloadFile(title, true).then((file: File | void) => {
                if (file instanceof File) {
                    var fileName = file.name.split('.txt')[0].concat('.pdf')
                    setFileNotPresent('');
                    const element = document.createElement("a");
                    element.href = URL.createObjectURL(file);
                    element.download = fileName;
                    document.body.appendChild(element);
                    element.click();
                } else {
                    setFileNotPresent(errorMessage);
                }
            }).catch(() => setFileNotPresent(errorMessage))
        }

    return (
        <MaandprogrammaDownload onDownloadFile={handleDownLoadFile} errorMessage={fileNotPresent}/>
    )
};