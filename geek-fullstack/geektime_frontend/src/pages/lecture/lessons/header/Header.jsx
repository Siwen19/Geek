import React, { useState } from 'react';
import {Tab, Nav} from './Header.style.js'; 
import { NavLink } from 'react-router-dom';
import {renderRoutes} from 'react-router-config'

function Header({route}) {   
    return (
        <>
        {renderRoutes(route.routes)} 
        <Tab>
            <NavLink to="/lecture/lessons" activeClassName="selected">
                <span>课程</span></NavLink>
            <NavLink to="/lecture/camp" activeClassName="selected">
                <span>训练营</span></NavLink>
            <NavLink to="/lecture/daily" activeClassName="selected">
                <span>每日一课</span></NavLink> 
        </Tab>
        <Nav>
            <img src="/asserts/search.png" alt=""/>
        </Nav> 
        </>
    )
}

export default React.memo(Header)