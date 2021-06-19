import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react"
import {Page} from "src/components/page/Page"
import content from 'src/resources/Brieven.json'
import {downloadFile} from "../../services/FileDownloader";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";


const brieven: string[] = ['Chironieuwsje.pdf','inschrijvings-formulier.pdf','Medische-steekkaart.pdf','kampboekje.pdf','laatste-zondag.pdf']

export const Brieven = () => {

    const [fileNotPresent, setFileNotPresent] = useState('')
    const errorMessage = 'Er is nog geen maandprogramma voor uw afdeling';

    const handleDownLoadFile = (title: string) => {
        downloadFile(title, false).then((file: File | void) => {
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
        <>
            <div>
                <Image src={'../../../../brieven-banner.jpg'} fluid style={{width:'100%'}}/>
            </div>
            <Page content={content} title={'Brieven'}/>
            {brieven.map(x => {
                return(
                    <Row className={'d-flex justify-content-center pt-2'}>
                        <Col lg={8}>
                            <button className={'brief-button'} onClick={() =>handleDownLoadFile(x)}><FontAwesomeIcon icon={faArrowRight}/>  {x}</button>
                        </Col>
                    </Row>
                )})}
            {fileNotPresent && (
                <Row className={'d-flex justify-content-center pt-2'}>
                    <Col lg={8}>
                        <h5 className={'text-danger'}> Er was een probleem met het downloaden, probeer het later opnieuw</h5>
                    </Col>
                </Row>
            )
            }
        </>
    )
}