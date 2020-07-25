import React, { useState } from 'react';
import './Item.css';
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function Item(props) {
    const { data, remain } = props;
    return (
        <NavLink to={`/user/${data.id}`}>
            <div className="content-wrapper" id={data.id}>
                <img src={`/asserts/${data.image}.png`} alt="" className="data-image" />
                <div className="data-title" id={data.id}>
                    <span>{data.title}</span>
                </div>
                {
                    data.id === 'account' && <span className='remain-money'>{remain}</span>
                }
                <img src="/asserts/right.png" alt="" className="right-image" />
            </div>
        </NavLink>
    )
}  