import React, { useState } from 'react';
import {Tab, Nav} from './Header.style.js'; 
import { NavLink } from 'react-router-dom';
import {renderRoutes} from 'react-router-config'

function Header(props) { 
    console.log(props);
    return (
        <>
        <Tab>
            <NavLink to="/lecture">课程</NavLink>
            <NavLink to="/camp">训练营</NavLink>
            <NavLink to="/daily">每日一课</NavLink> 
        </Tab>
        <Nav>
            <img src="/asserts/search.png" alt=""/>
        </Nav> 
        {/* {renderRoutes(route.routes)} */}
        </>
    )
}

export default React.memo(Header)