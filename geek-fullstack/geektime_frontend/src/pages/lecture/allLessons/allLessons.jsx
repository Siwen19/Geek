import React from 'react';
import "./allLessons.style.js";
import Item from './item/Item';
import { useRef } from 'react';
import { useEffect } from 'react';
// import Scroll from '../../common/scroll/Scroll';
import { useState } from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { Wrap, TabNav, InnerDiv, InnerItem, NavWrapper, ContentItem } from './allLessons.style';
import { TabLesson, TabLeftItem } from '../style';

export default function All(props) {
    const { data } = props;
    const newData = data !== undefined ? data : [];
    const item = newData.map((ele, index) => <Item data={ele} key={index} />)
    const filterValue = useRef();
    return (
        <Wrap>
            <TabLesson>
                <TabLeftItem>
                    全部课程
                </TabLeftItem>
            </TabLesson>
            <TabNav>
                <NavWrapper>
                    <InnerItem>
                        <InnerDiv>
                            <span>课程形式</span>
                            <span className="iconfont">
                                <img src="asserts/down.png" alt="" />
                            </span>
                        </InnerDiv>
                    </InnerItem>
                    <InnerItem>
                        <InnerDiv>
                            <span>订阅状态</span>
                            <span className="iconfont">
                                <img src="asserts/down.png" alt="" />
                            </span>
                        </InnerDiv>
                    </InnerItem>
                    <InnerItem>
                        <InnerDiv>
                            <span>上新</span>
                            <span className="iconfont">
                                <img src="/asserts/filter.png" alt="" style={{ width: "6vw", height: "3vh" }} />
                            </span>
                        </InnerDiv>
                    </InnerItem>
                </NavWrapper>
            </TabNav>
            <ContentItem>
                {item}
            </ContentItem>
        </Wrap>
    )
};
