import {Page} from "../../components/page/Page";
import content from 'src/resources/Verhuur.json'
import React from "react";

export const Verhuur = () => {
    return (
        <Page title={'Verhuur'} content={content}/>
    )
}