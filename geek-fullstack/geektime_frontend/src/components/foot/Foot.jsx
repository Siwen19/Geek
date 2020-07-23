import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Foot.css';
class Foot extends Component {

    render() {
        return (
            
            <div className="gk-foot"> 
                <Link to="/" className="gk-foot--item gk-foot--item__on">
                    <span className="gk-foot--icon iconfont">&#xe726;</span>
                    <p className="gk-foot--label">发现</p>
                </Link>

                <Link to="/lecture" className="gk-foot--item">
                    <span className="gk-foot--icon iconfont">&#xe649;</span>
                    <p className="gk-foot--label">讲堂</p>
                </Link>

                <Link to="/horde" className="gk-foot--item">
                    <span className="gk-foot--icon iconfont">&#xe677;</span>
                    <p className="gk-foot--label">部落</p>
                </Link>

                <Link to="/study" className="gk-foot--item">
                    <span className="gk-foot--icon iconfont">&#xe609;</span>
                    <p className="gk-foot--label">学习</p>
                </Link>

                <Link to="/my" className="gk-foot--item">
                    <span className="gk-foot--icon iconfont">&#xe604;</span>
                    <p className="gk-foot--label">我的</p>
                </Link>
            </div>
        );
    }
}

export default Foot;