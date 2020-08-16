import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../homepage/account/store/actions";

function Order(props) {
  const { titleContent, orderType, userMoney, getUserMoneyDispatch } = props;
  const [visible, setVisibility] = useState("hidden");
  const [paymethod, setPayMethod] = useState("wechat");
  const [psdvisible, setpsdVisible] = useState("hidden");
  const [currentMoney, setCurrentMoney] = useState(0);

  useEffect(() => {
    if (orderType === 0) {
      setCurrentMoney(titleContent.extra.first_promo.price / 100);
    } else {
      setCurrentMoney(titleContent.price.market / 100);
    }
  }, []);
  const handleCostMoney = () => {
    if (currentMoney < userMoney) return getUserMoneyDispatch(currentMoney);
  };
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
            <img src={titleContent.author.avatar} />
            <dl>
              <dt>{titleContent.title}</dt>
              <dd className="item-subtitle">
                {titleContent.unit} | {titleContent.extra.sub.count}人已学习
              </dd>
              <dd className="item-price">
                <div className="price">
                  ¥
                  {orderType === 0
                    ? titleContent.extra.first_promo.price / 100
                    : titleContent.price.market / 100}
                </div>
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
            <i className="iconfont">¥</i>
            {orderType === 0
              ? titleContent.extra.first_promo.price / 100
              : titleContent.price.market / 100}
          </span>
        </div>
      </div>
      <div>
        <h3 className="pay-method-h3">当前支付方式</h3>
        <div className="method-list-item">
          <span>
            {paymethod === "wechat" ? (
              <img src="/wechat.png" />
            ) : (
              <img src="/alipay.png" />
            )}
            <div className="pay-method-text">
              <p>{paymethod === "wechat" ? "微信支付" : "支付宝支付"}</p>
            </div>
          </span>
          <div className="checkbox">
            <img src="/success.png" />
          </div>
        </div>
        <div
          className="choose-other-pay"
          onClick={() => setVisibility("visible")}
        >
          <div className="choose-label">选择其他支付方式</div>
          <img src="/asserts/right.png" />
        </div>
        <div className="fixed-layer" style={{ visibility: `${visible}` }}>
          <div className="payment-methods-panel">
            <h6>选择支付方式</h6>
            <div className="pay-methods">
              <div className="method-list">
                <div
                  className="method-list-item"
                  onClick={() => {
                    setPayMethod("wechat");
                    setVisibility("hidden");
                  }}
                >
                  <span>
                    <img src="/wechat.png" />
                    <span className="pay-method-text">微信支付</span>
                  </span>
                  <div
                    className="_19OCs7r0awRc9fQGclUVsh_0"
                    check-alias="weixin"
                  >
                    <div className="_3gtsaSTR1gESwSnLdhq8yC_0">
                      {paymethod === "wechat" ? (
                        <img src="/success.png" />
                      ) : (
                        <img src="/circle.png" />
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="method-list-item"
                  onClick={() => {
                    setPayMethod("alipay");
                    setVisibility("hidden");
                  }}
                >
                  <span>
                    <img src="/alipay.png" />
                    <span className="pay-method-text">支付宝支付</span>
                  </span>
                  <div
                    checked="checked"
                    className="_19OCs7r0awRc9fQGclUVsh_0"
                    check-alias="alipay"
                  >
                    <div className="_3gtsaSTR1gESwSnLdhq8yC_0">
                      {paymethod === "alipay" ? (
                        <img src="/success.png" />
                      ) : (
                        <img src="/circle.png" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="cancel-choose"
              onClick={() => setVisibility("hidden")}
            >
              取消
            </div>
          </div>
        </div>
      </div>
      <p className="coupon-rules">
        · 本商品为虚拟内容服务，购买后不支持退换、转让，请斟酌确认。
      </p>
      <p className="current-user">
        <span>
          当前登录账号：150****6221
          <a style={{ color: "#fa8919" }}>切换账号</a>
        </span>
      </p>
      <div
        className="bottom"
        onClick={() => {
          setpsdVisible("visible");
        }}
      >
        <div className="primary">
          ¥
          {orderType === 0
            ? titleContent.extra.first_promo.price / 100
            : titleContent.price.market / 100}
          确认支付
        </div>
        <div className="fixed-layer" style={{ visibility: `${psdvisible}` }}>
          <div className="password-box">
            {parseFloat(currentMoney) > parseFloat(userMoney) ? (
              <span>
                余额不足,
                <Link to="/account" style={{ color: "#fa8919" }}>
                  前去充值
                </Link>
              </span>
            ) : (
              <span>
                支付成功,
                <Link
                  to="/user"
                  style={{ color: "#fa8919" }}
                  onClick={() => handleCostMoney()}
                >
                  查看我的账户
                </Link>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    titleContent: state.personColumn.titleContent,
    orderType: state.personColumn.orderType,
    userMoney: state.investMoney.money,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserMoneyDispatch(data) {
      dispatch(actionTypes.costMoney(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Order));
