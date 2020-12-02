import {MaandprogrammaUpload} from "./MaandprogrammaUpload";
import {useState} from "react";
import {uploadFile} from "../../services/MaandProgrammaUploader";

export const MaandProgrammaDownloadContainer = () => {
    const [maand, setMaand] = useState('')
    const [afdeling, setAfdeling] = useState('')

    const handleFileUpload = (fileList: FileList | null) => {
        if (fileList && fileList.item(0)) {
            const file: File = fileList.item(0)!;
            const fileName = afdeling + '-' + maand
            uploadFile(file, fileName)
        }
    }

    return (
        <MaandprogrammaUpload maand={maand} afdeling={afdeling} onMaandChange={setMaand} onFileUpload={handleFileUpload} onAfdelingChange={setAfdeling}/>
    )
}