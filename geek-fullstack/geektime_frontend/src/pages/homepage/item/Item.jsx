import React from 'react';
import './Item.css'; 

export default function Item(props) {
    const { data } = props;
    const handleClickEvent = (e) => {
        console.log(e.target.parentNode.id)
    }
    return (
        <div className="content-wrapper" id={data.title} onClick={handleClickEvent}>  
            <img src={`/asserts/${data.image}.png`} alt="" className="data-image" />
            <div className="data-title" id={data.title}>
                <span>{data.title}</span>
            </div>
            <span className='remain-money'>{data.money}</span>
            <img src="/asserts/right.png" alt="" className="right-image" />
        </div>
    )
} 