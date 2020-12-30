import axios from 'axios';

export const downloadFile = (title: string, maandprogramma: boolean): Promise<File | void> => {
    const maanden = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
    var url = '';
    var fileName = title
    if (maandprogramma) {
        fileName = title.concat('-' + maanden[new Date().getMonth()] + '.pdf')
        url = `https://chiro-site-files.s3-eu-central-1.amazonaws.com/maandprogrammas/${fileName}`
    } else {
        url = `https://chiro-site-files.s3-eu-central-1.amazonaws.com/brieven/${title}`
    }
    return axios({url: url, responseType: 'blob', method: 'get'}).then(result => {
        return new File([result.data], title);
    })
}