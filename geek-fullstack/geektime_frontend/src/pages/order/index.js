import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";

function Order() {
  return (
    <div className="wrapper">
      <div className="wrapper-head">
        <svg
          width="42"
          height="42"
          style={{ marginLeft: "-2vw" }}
          onClick={() => window.history.back()}
        >
          <polyline
            points="25, 13 16, 21 25, 29"
            stroke="#ccc"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <span>结算台</span>
      </div>
      <div className="wrapper-account">
        <ul className="class-list">
          <li>
            <img src="https://static001.geekbang.org/resource/image/2b/2d/2b98f1258ce0cf6d26cc7a281a67872d.jpg?x-oss-process=image/resize,m_fill,h_80,w_80" />
            <dl>
              <dt>Redis核心技术与实战</dt>
              <dd className="item-subtitle">50讲 | 5813人已学习</dd>
              <dd className="item-price">
                <div className="price">¥ 29.90</div>
                <span className="item-count">×1</span>
              </dd>
            </dl>
          </li>
        </ul>
      </div>
      <div className="checkout-panel">
        <div className="checkout-price">
          <span>总计:</span>
          <span className="price">
            <i className="iconfont">
              ¥
            </i>
            29.90
          </span>
        </div>
      </div>
      <div>
        <h3 className="pay-method-h3">当前支付方式</h3>
        <div className="method-list-item">
          <span>
            <img src="/wechat.png" />
            <div className="pay-method-text">
              <p>微信支付</p>
            </div>
          </span>
          <div className="checkbox">
            <img src="/success.png" />
          </div>
        </div>
        <div className="choose-other-pay">
          <div className="choose-label">选择其他支付方式</div>
          <img src="/asserts/right.png" />
        </div>
      </div>
      <p className="coupon-rules">
        · 本商品为虚拟内容服务，购买后不支持退换、转让，请斟酌确认。
      </p>
      <p className="current-user">
        <span>
          当前登录账号：150****6221
          <a style={{color: "#fa8919"}}>
            切换账号
          </a>
        </span>
      </p>
      <div className="bottom">
        <div 
          className="primary" 
        >
          ¥29.90 确认支付
        </div>
      </div>
    </div>
  );
}
export default Order;
