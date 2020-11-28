import React from "react";
import Image from 'react-bootstrap/Image'
import {Page} from "../../components/page/Page";
import content from '../../resources/WatIsChiro.json'

export const Chiro = () => {
    return (
        <>
            <Page title={'Wat is Chiro?'} content={content}/>
        </>
    )
}