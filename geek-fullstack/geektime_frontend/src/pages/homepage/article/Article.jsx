import React, { useRef } from 'react';
import Item from '../item/Item';
import './Article.css';

export default function Article(props) {
    const { data, path } = props;
    const item = data.map((ele, i) => <Item data={ele} path={path} key={i} />)

    return (
        <div className='article-wrapper'>
            {item}
        </div> 
    )
}