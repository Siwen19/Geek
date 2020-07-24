import React, { useRef } from 'react';
import Item from '../item/Item';
import './Article.css'; 
import { useEffect } from 'react';

export default function Article(props) {
    const {data} = props;   
    const item  = data.map((ele, i) => <Item data={ele} key={i}/>) 
    
    return ( 
        <div className='article-wrapper'> 
        {item}
        </div>
    )
}