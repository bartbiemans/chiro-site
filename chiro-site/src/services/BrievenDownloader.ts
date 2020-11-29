import axios from 'axios';

export const downloadBrieven = (title: string) => {
    axios({url:`https://chiro-site-files.s3-eu-central-1.amazonaws.com/maandprogrammas/${title}`, responseType: 'blob', method:'get'}).then(result => {
        var file: File = new File([result.data],title);
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = title;
        document.body.appendChild(element);
        element.click();
    });
}