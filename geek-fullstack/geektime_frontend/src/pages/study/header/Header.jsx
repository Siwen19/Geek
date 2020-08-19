import React from 'react'
import './Header.css'
export default function Header() {
    return (
        <div className="Header-Wrapper">
            <div className="header-title">
                <div className="header-title-text">我的学习</div>
                <img src="study-images/clock.png"/>
            </div>

            <div className="header-content">
                <div className="header-content-text">本周时长 0 小时 1 分钟</div>
                <svg width="20" height="20" className="header-content-svg" style={{marginLeft: "75%"}}>
                    <polyline
                    points="5,5 15,10 5,15"
                    stroke="black"
                    strokeWidth="2"
                    fill="none" />
                </svg>
            </div>

            <div className="header-foot">
                <div className="header-foot-item1">
                    <span >0</span>
                    <span className="fitem1-text">笔记</span>
                </div>
                <div className="header-foot-item2">
                    <span >0</span>
                    <span className="fitem2-text">留言</span>
                </div>
                <div className="header-foot-item3">
                    <span >0</span>
                    <span className="fitem3-text">收藏</span>
                </div>
                <div className="header-foot-item4">
                    <span >0</span>
                    <span className="fitem4-text">下载</span>
                </div>
            </div>
        </div>
    )
}
