import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IntroductionWrap } from "./style";
import * as actionTypes from "../../store/actionCreators";

function Introduction(props) {
  const { introContent, id } = props;
  const { getIntroDataDispatch } = props;
  useEffect(() => {
    if (!introContent.length) getIntroDataDispatch(id);
  }, []);
  return ( 
      <IntroductionWrap>
        <div>
          <div>
              <h2>你将获得</h2>
          </div>
          <div>
              <div>
                  <ul>
                      <li>23 种设计模式与范式实战精讲；</li>
                      <li>200+ 真实案例分析设计与实现；</li>
                      <li>顶尖互联网公司的编程经验分享；</li>
                      <li>应对设计模式面试的思路与技巧。</li>
                  </ul>
              </div>
          </div>
          <div></div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </IntroductionWrap> 
  );
}

const mapStateToProps = (state) => {
  return {
    introContent: state.personColumn.introContent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIntroDataDispatch() {
      dispatch(actionTypes.getIntroContent());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Introduction));
