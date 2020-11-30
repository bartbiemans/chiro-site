import React from "react";
import {Page} from "../../components/page/Page";
import content from '../../resources/WatIsChiro.json'
import Image from "react-bootstrap/Image";

export const Chiro = () => {
    return (
        <>
            <Image src={'../../../../chiro-banner.jpg'} fluid style={{width:'100%'}}/>
            <Page title={'Wat is Chiro?'} content={content}/>
        </>
    )
}