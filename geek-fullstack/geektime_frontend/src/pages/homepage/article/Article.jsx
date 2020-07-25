import React, { useRef } from 'react';
import Item from '../item/Item';
import './Article.css';

export default function Article(props) {
    const { data, path, remain } = props;
    const item = data.map((ele, i) => <Item data={ele} path={path} key={i} remain={remain} />)

    return (
        <div className='article-wrapper'>
            {item}
        </div> 
    )
}