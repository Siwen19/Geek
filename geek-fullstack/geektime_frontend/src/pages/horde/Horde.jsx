import React, { Fragment } from 'react';
import './Horde.css'
import Header from './header/Header'
import horde1 from '../../asset/horde-images/horde1.png'
import horde2 from '../../asset/horde-images/horde2.png'
import horde3 from '../../asset/horde-images/horde3.png'
import horde4 from '../../asset/horde-images/horde4.png'
import horde5 from '../../asset/horde-images/horde5.png'
import like from '../../asset/horde-images/like.jpg'
import Scroll from '../../components/scroll/Scroll';
import styled from "styled-components";


export const Content = styled.div` 
  position: fixed;
  top: 44px;
  bottom: 0; 
  width: 100%;   
`

function Horde() {
    return (
        <>
            <Header />
            <Content>
                <Scroll>
                    <div>
                    <img src={like} style={{ width: "100vw", height: "35vh" }} />
                    <div className="horde-container">
                        <div className="horde-content">
                            <div className="horde-content1">
                                <div className="horde1-img">
                                    <img src={horde1} alt="" />
                                </div>
                                <span className="horde1-title">AI和大数据</span>
                                <div className="horde1-attention">+关注</div>
                            </div>

                            <div className="horde-content1">
                                <div className="horde2-img">
                                    <img src={horde2} alt="" />
                                </div>
                                <span className="horde1-title">极客时间</span>
                                <div className="horde1-attention">+关注</div>
                            </div>

                            <div className="horde-content1">
                                <div className="horde3-img">
                                    <img src={horde3} alt="" />
                                </div>
                                <span className="horde1-title">我爱读书</span>
                                <div className="horde1-attention">+关注</div>
                            </div>

                            <div className="horde-content1">
                                <div className="horde4-img">
                                    <img src={horde4} alt="" />
                                </div>
                                <span className="horde1-title">聊聊架构</span>
                                <div className="horde1-attention">+关注</div>
                            </div>

                            <div className="horde-content1">
                                <div className="horde5-img">
                                    <img src={horde5} alt="" />
                                </div>
                                <span className="horde1-title">问题集合</span>
                                <div className="horde1-attention">+关注</div>
                            </div>

                            <div className="button">
                                <div className="button-text">查看全部频道</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </Scroll>
            </Content>
        </>
    )
}

export default Horde;