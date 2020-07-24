import React, { useState } from 'react';
import './Item.css'; 
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function Item(props) {
    const { data, path } = props; 
    const [state, setState] = useState("");  
    const handleClickEvent = (e) => {
        setState(e.target.parentNode.id)
    } 
    return ( 
        <>
        {state === 'account' && renderRoutes(path.routes)} 
        <NavLink to={`/user/${data.id}`}>
            <div className="content-wrapper" id={data.id} onClick={handleClickEvent}>  
            <img src={`/asserts/${data.image}.png`} alt="" className="data-image" />
            <div className="data-title" id={data.id}>
                <span style={{textDecoration: "none"}}>{data.title}</span>
            </div>
            <span className='remain-money'>{data.money}</span>
            <img src="/asserts/right.png" alt="" className="right-image" />
        </div>
        </NavLink>
        </>
    )
} 