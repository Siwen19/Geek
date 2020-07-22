import React from 'react'; 
import './Direction.style.js';
import Item from './item/Item';
import {ContentWrapper} from './Direction.style';
import {Wrap, Tab, TabLeftItem, TabRightItem} from '../style';


export default function Direction(props) {
    const {data} = props; 
    const newData = data !== undefined ? data : []; 
    const item = newData.map((ele, index) => <Item data={ele} key={index} />)
    return (
        <Wrap> 
            <Tab> 
                <TabLeftItem>
                课程方向
                </TabLeftItem> 
                <TabRightItem>
                查看全部
                </TabRightItem> 
            </Tab>
            <ContentWrapper>
                {item}
            </ContentWrapper> 
        </Wrap>
    )
};
