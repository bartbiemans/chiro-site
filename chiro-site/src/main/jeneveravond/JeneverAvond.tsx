import {Page} from "../../components/page/Page";
import React from "react";
import content from '../../resources/JeneverAvond.json';

export const JeneverAvond = () => {
    return (
        <>
            <Page content={content} title={'JeneverAvond'}/>
            </>
    )
}