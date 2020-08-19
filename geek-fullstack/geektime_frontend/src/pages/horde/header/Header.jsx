import React, { useState } from 'react';
import { Tab, Nav } from './Header.style.js'; 
import Scroll from "../../../components/scroll/Scroll";

function Header() {
    return (
        <>
            <Tab>
                <a><span activeClassName="selected">关注</span></a>
                <a><span activeClassName="selected">全部</span></a>
                <a><span activeClassName="selected">精华</span></a>
            </Tab>
            <Nav>
                <img src="/asserts/avatar.jpg" alt="" />
            </Nav>
        </>
    )
}

export default React.memo(Header)