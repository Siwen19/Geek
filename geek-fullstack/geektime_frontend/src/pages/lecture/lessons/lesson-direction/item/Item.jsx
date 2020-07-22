import React from 'react';
import './Item.style.js';
import { Tab } from './Item.style';

export default function Item(props) {
    const { data } = props;
    return (
        <Tab>
            {data}
        </Tab>
    )
};
