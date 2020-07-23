import React from 'react';
import './Item.css'; 

export default function Item(props) {
    const { data } = props;
    return (
        <div className="content-wrapper">  
            <img src={`/asserts/${data.image}.png`} alt="" className="data-image" />
            <div className="data-title">
                <span>{data.title}</span>
            </div>
            <span className='remain-money'>{data.money}</span>
            <img src="/asserts/right.png" alt="" className="right-image" />
        </div>
    )
} 