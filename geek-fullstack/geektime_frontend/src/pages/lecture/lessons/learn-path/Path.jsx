import React from 'react';
import './Path.style.js'; 
import Item from './item/Item';
import {Wrap, Content} from './Path.style';
import {Tab, TabLeftItem, TabRightItem} from '../style';

export default function Path(props) { 
    console.log(1); 
    const {data} = props;
    const newData = data !== undefined ? data : [];
    const item = newData.map((ele, index) => <Item data={ele} key={index} />)
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
                <Content> 
                    <ul>{item}</ul> 
                </Content> 
            </Wrap> 
    )
};
