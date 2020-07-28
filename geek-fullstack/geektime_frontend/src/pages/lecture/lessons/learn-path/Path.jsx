import React, { useEffect, useState, useRef } from 'react';
import './Path.style.js';
import Item from './item/Item';
import { Wrap, Content, ScrollContent } from './Path.style';
import { Tab, TabLeftItem, TabRightItem } from '../style';
// import Scroll from './scroll/index';
import Scroll from '../../../../components/scroll/Scroll';

export default function Path(props) {
    const { data } = props;
    const newData = data !== undefined ? data : [];
    const item = newData.map((ele, index) => <Item data={ele} key={index} />)
    const [refreshCategoryScroll, setRefreshCategoryScroll] = useState(false);
    const path = useRef(null);

    useEffect(() => {
        let pathDOM = path.current; 
        let tagElems = pathDOM.querySelectorAll("ul");  
        let totalWidth = 0;
        Array.from(tagElems).forEach(ele => {
            totalWidth += ele.offsetWidth;
        });
        totalWidth += 240;
        pathDOM.style.width = `${totalWidth}px`;
        setRefreshCategoryScroll(true);
    }, [refreshCategoryScroll]);
    return (
        <Wrap>
            <Tab>
                <TabLeftItem>
                    学习路径
                    </TabLeftItem>
                <TabRightItem>
                    查看全部
                    </TabRightItem>
            </Tab>
            <Scroll direction={"horizental"} refresh={true}>
                <Content ref={path}>
                    <ul>{item}</ul>
                </Content>
            </Scroll>
        </Wrap>
    )
};
