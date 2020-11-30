import React from "react"
import {Page} from "src/components/page/Page"
import content from "src/resources/Inschrijven.json"
import Image from "react-bootstrap/Image";

export const Inschrijven = () => {
    return (
        <>
        <div>
            <Image src={'../../../../inschrijven-banner.jpg'} fluid style={{width:'100%'}}/>
        </div>
        <Page content={content} title={'Inschrijven'}/>
        </>
    )
};