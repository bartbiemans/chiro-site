import S3 from 'react-aws-s3';

const config = {
    bucketName: 'chiro-site-files',
    dirName: 'maandprogrammas',
    region: 'eu-central-1',
    accessKeyId: 'AKIA3AWNITWIQPSGA3JX',
    secretAccessKey: '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'
}

const uploadClient = new S3(config)

export const uploadFile = (file: File, fileName: string) => {
    uploadClient.uploadFile(file, fileName)
    alert('Maandprogramma is geupload')
}