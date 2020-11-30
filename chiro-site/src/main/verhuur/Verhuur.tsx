import {Page} from "../../components/page/Page";
import content from 'src/resources/Verhuur.json'
import React from "react";
import Image from "react-bootstrap/Image";

export const Verhuur = () => {
    return (
        <>
            <div>
                <Image src={'../../../../verhuur-banner.jpg'} fluid style={{width: '100%'}}/>
            </div>
            <Page title={'Verhuur'} content={content}/>
        </>
    )
}