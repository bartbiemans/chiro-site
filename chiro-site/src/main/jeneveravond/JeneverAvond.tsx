import {Page} from "../../components/page/Page";
import React from "react";
import content from '../../resources/JeneverAvond.json';
import Image from "react-bootstrap/Image";

export const JeneverAvond = () => {
    return (
        <>
            <div>
                <Image src={'../../../../jeneverAvond.jpg'} fluid style={{width:'100%'}}/>
            </div>
            <Page content={content} title={'JeneverAvond'}/>
            </>
    )
}