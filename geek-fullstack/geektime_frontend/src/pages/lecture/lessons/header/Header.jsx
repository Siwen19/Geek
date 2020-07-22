import React, { useState } from 'react';
import {Tab, Nav} from './Header.style.js'; 

export default function Header() { 
    return (
        <>
        <Tab>
            <a href="#">课程</a>
            <a href="#">训练营</a>
            <a href="#">每日一课</a> 
        </Tab>
        <Nav>
            <img src="/asserts/search.png" alt=""/>
        </Nav> 
        </>
    )
}