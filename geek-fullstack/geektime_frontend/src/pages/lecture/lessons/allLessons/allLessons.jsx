import React, { useState } from 'react';
import Item from './item/Item';
import './style.css';
import { Wrap, TabNav, InnerDiv, InnerItem, NavWrapper, ContentItem } from './allLessons.style';
import { TabLesson, TabLeftItem } from '../style';
import { renderRoutes } from 'react-router-config';
import { CSSTransition } from 'react-transition-group';

export default function All(props) {
    const { data, path } = props;
    const newData = data !== undefined ? data : [];
    // const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(true); 
    const item = newData.map((ele, index) => 
    <Item data={ele} key={index} path={path} onClick={() => setShowMessage(false)} />)
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
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames="fly"
                unmountOnExit 
            >
                <div>
                    <ContentItem>
                        {item}
                    </ContentItem>
                </div>
            </CSSTransition>
        </Wrap>
    )
};
