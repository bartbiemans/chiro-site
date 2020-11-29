import axios from 'axios';

export const downloadFile = (title: string, maandprogramma:boolean) => {
    const maanden = ['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december']
    var url = '';
    var fileName = title
    if(maandprogramma){
        fileName = title.concat('-' + maanden[new Date().getMonth()] + '.pdf')
        console.log(fileName)
        url = `https://chiro-site-files.s3-eu-central-1.amazonaws.com/maandprogrammas/${fileName}`
    }else{
        url = `https://chiro-site-files.s3-eu-central-1.amazonaws.com/brieven/${title}`
     }
    axios({url:url, responseType: 'blob', method:'get'}).then(result => {
        var file: File = new File([result.data],title);
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        console.log(title)
        element.download = fileName;
        document.body.appendChild(element);
        element.click();
    });
}