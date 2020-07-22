import React from 'react';
import "./allLessons.style.js";
import Item from './item/Item';
import { useRef } from 'react';
import { useEffect } from 'react';
// import Scroll from '../../common/scroll/Scroll';
import { useState } from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { Wrap, TabNav } from './allLessons.style';
import { TabLesson, TabLeftItem, NavHeadItem } from '../style';

export default function All(props) {
    const { data } = props;
    const newData = data !== undefined ? data : [];
    const item = newData.map((ele, index) => <Item data={ele} key={index} />)
    const filterValue = useRef();
    const [refrehScroll, setRefreshScroll] = useState(true);
    // console.log(bScroll);
    // useEffect(() => { 
    //     if (bScroll && Scroll.props.refresh === true) {
    //         Scroll.bScroll.refresh();
    //     }
    // })
    return (
        <Wrap>
            <TabLesson>
                <TabLeftItem>
                    全部课程
                </TabLeftItem>
            </TabLesson>
            <NavHeadItem>
                <TabNav>
                    <span>课程形式</span>
                    <span className="iconfont">
                        <img src="asserts/down.png" alt="" />
                    </span> 
                            <span>订阅状态</span>
                            <span className="iconfont">
                                <img src="asserts/down.png" alt="" />
                            </span> 
                    <span>上新</span>
                    <span className="iconfont">
                        <img src="/asserts/filter.png" alt="" style={{ width: "6vw", height: "3vh" }} />
                    </span>
                </TabNav>
            </NavHeadItem>
            {/* <Scroll
                refresh={true}
                onScroll={(e) => { 
                    // console.log(e);
                    forceCheck();
                }}
            > */}
            <div className="XwOzLqSQ_0">
                {item}
            </div>
            {/* </Scroll> */}
        </Wrap>
    )
};
