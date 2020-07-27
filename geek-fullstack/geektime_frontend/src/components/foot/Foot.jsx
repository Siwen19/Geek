import React from 'react';
import { NavLink } from 'react-router-dom';
import './Foot.css';
import { renderRoutes } from 'react-router-config';
function Foot({ route }) {  
    return ( 
        <div>
             {renderRoutes(route.routes)}
            <div className="gk-foot">  
                <NavLink to="/" className="gk-foot--item gk-foot--item__on" activeClassName="selected">
                    <span className="gk-foot--icon iconfont">&#xe60e;</span>
                    <p className="gk-foot--label">发现</p>
                </NavLink>

                <NavLink to="/lecture" className="gk-foot--item" activeClassName="selected">
                    <span className="gk-foot--icon iconfont">&#xe726;</span>
                    <p className="gk-foot--label">讲堂</p>
                </NavLink>

                <NavLink to="/horde" className="gk-foot--item" activeClassName="selected">
                    <span className="gk-foot--icon iconfont">&#xe637;</span>
                    <p className="gk-foot--label">部落</p>
                </NavLink>

                <NavLink to="/study" className="gk-foot--item" activeClassName="selected">
                    <span className="gk-foot--icon iconfont">&#xe625;</span>
                    <p className="gk-foot--label">学习</p>
                </NavLink>

                <NavLink to="/user" className="gk-foot--item" activeClassName="selected">
                    <span className="gk-foot--icon iconfont">&#xe617;</span>
                    <p className="gk-foot--label">我的</p>
                </NavLink>
            </div>
        </div>
    );
}


export default Foot;