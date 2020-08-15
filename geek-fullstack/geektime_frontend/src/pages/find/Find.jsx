import React, { Fragment, useState, useEffect } from 'react';
import './Find.css'
import { Top, Search, Content } from './Find.style'
import Shop from './shop/Shop';
import Gku from './gku/Gku';
import Class from './class/Class';
import Scroll from '../../components/scroll/Scroll';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions'; 
import MySwiper from './swiper/Swiper'

function Find(props) { 
    const { supermarket, university, lecture } = props
    const { getFindInfoDispatch } = props

    useEffect(() => {
        getFindInfoDispatch(); 
    }, [])

    const newShop = supermarket;
    const newGku = university;
    const newClass = lecture;
    return (
        <>
            <Top>
                <span className="title">发现</span>
                <span className="iconfont">&#xe6ab;</span>
            </Top>
            <Content>
                <Scroll>
                    <div className="scroll-container">
                        <Search>
                            <span className="iconfont">&#xe633;</span>
                            <input className="search" placeholder="搜索课程、课程内容、每日一课等" />
                        </Search>

                        <MySwiper />

                        <div className="speech">
                            <div className="speech-title">
                                <img src="asserts/find-images/speech.png" alt="" className="title-img" />
                                <div className="speech-author">卖桃者说</div>
                                <svg width="20" height="20" className="speech-svg">
                                    <polyline
                                        points="5,5 15,10 5,15"
                                        stroke="black"
                                        strokeWidth="2"
                                        fill="none" />
                                </svg>
                            </div>
                            <div className="speech-content">
                                <span className="iconfont">&#xe645;</span>
                                <div className="speech-news">第319期 | 新浪或将退市</div>
                            </div>
                        </div>

                        <div className="gkLive">
                            <div className="live-title">
                                <span className="iconfont">&#xe66d;</span>
                                <span className="live-title-type">极客Live</span>
                                <span className="live-title-tail">直播预告</span>
                            </div>
                            <div className="live-contents">
                                <div className="live-contents-left">
                                    <span className="live-time iconfont">&#xe66d; 2020年07月24日 20:00</span>
                                    <div className="live-contents-detail">作为艺术小白，如何欣赏一幅画?</div>
                                    <span className="live-teacher">罗马美术学院讲师，提升你的审美力</span>
                                </div>
                                <div className="live-contents-right">
                                    <img src="asserts/find-images/live.png" alt="" className="live-img" />
                                </div>
                            </div>
                        </div>

                        <div className="line"></div>

                        <div className="ad1">
                            <img src="/asserts/find-images/ad1.png" alt="" width="94%" />
                        </div>

                        <div className="gkshop">
                            <div className="gkshop-title">
                                <span className="iconfont">&#xe66d;</span>
                                <span className="gkshop-title-type">极客商城</span>
                                <span className="gkshop-title-tail">查看全部</span>
                            </div>
                            <div className="gkshop-contents">
                                {Array.isArray(newShop) && newShop.map((ele, i) => <Shop key={i} shop={ele} />)}
                            </div>
                        </div>

                        <div className="gku">
                            <div className="gku-title">
                                <span className="iconfont">&#xe66d;</span>
                                <span className="gku-title-type">极客大学</span>
                                <span className="gku-title-tail">查看全部</span>
                            </div>
                            <div className="gku-contents">
                                {Array.isArray(newGku) && newGku.map((ele, i) => <Gku key={i} gku={ele} />)}
                            </div>
                        </div>

                        <div className="cls">
                            <div className="cls-title">
                                <span className="iconfont">&#xe66d;</span>
                                <span className="cls-title-type">每日一课</span>
                                <span className="cls-title-tail">查看全部</span>
                            </div>
                            <div className="cls-contents">
                                {Array.isArray(newClass) && newClass.map((ele, i) => <Class key={i} cls={ele} />)}
                            </div>
                        </div>

                        <div className="buttonVIP">
                            开通VIP畅看，低至 1 元 / 天
                        </div>
                    </div>
                </Scroll>
            </Content>
        </>
    )
}

export default connect((state) => {
    return {
        supermarket: state.findPageData.shop,
        university: state.findPageData.university,
        lecture: state.findPageData.class
    }
}, (dispatch) => {
    return {
        getFindInfoDispatch() {
            dispatch(actionTypes.getFindInfo())
        }
    }
})(Find);
