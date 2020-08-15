import React, { useEffect } from "react";
import Path from "./learn-path/Path";
import Direction from "./lesson-direction/Direction";
import AllLessons from "./allLessons/allLessons";
import { Tab, Content, EnterLoading } from "./index.style";
import { connect } from "react-redux";
import * as actionTypes from "./store/actions";
import { renderRoutes } from "react-router-config";
import { forceCheck } from "react-lazyload";
import Scroll from "../../../components/scroll/Scroll";
import Loading from "../../../baseUI/loading/index";

function Lessons(props) {
    console.log(props)
    const {
        route,
        studyPath,
        lessonsDirection,
        allLessons,
        getLessonsListDataDispatch,
    } = props;
    const {
        enterLoading,
        pullUpLoading,
        pullDownLoading,
        pullUpRefresh,
        pageCount,
        pullDownRefresh, 
    } = props;

    useEffect(() => {
        if (!studyPath.length) {
            getLessonsListDataDispatch();
        }
    }, []);
    const handlePullUp = () => {
        pullUpRefresh(allLessons, pageCount);
    };

    const handlePullDown = () => {
        pullDownRefresh(allLessons, pageCount);
    }; 
    return (
        <>
            {renderRoutes(route.routes)}
            <Content>
                <Scroll
                    onScroll={forceCheck}
                    pullUp={handlePullUp}
                    pullDown={handlePullDown}
                    pullUpLoading={pullUpLoading}
                    pullDownLoading={pullDownLoading}
                >
                    <Tab>
                        <Path data={studyPath} />
                        <Direction data={lessonsDirection} />
                        <AllLessons data={allLessons} path={route} />
                    </Tab>
                    {/* 入场加载动画 */}
                    {enterLoading ? (
                        <EnterLoading>
                            <Loading></Loading>
                        </EnterLoading>
                    ) : null}
                </Scroll>
            </Content>
        </>
    );
}

export default connect(
    function mapStateToProps(state) {
        return {
            studyPath: state.lessons.studyPath,
            lessonsDirection: state.lessons.lessonsDirection,
            allLessons: state.lessons.allLessons,
            enterLoading: state.lessons.enterLoading,
            pullUpLoading: state.lessons.pullUpLoading,
            pageCount: state.lessons.listOffset,
            pullDownLoading: state.lessons.pullDownLoading,
        };
    },
    function mapDispatchToProps(dispatch) {
        return {
            getLessonsListDataDispatch() {
                dispatch(actionTypes.getLessonsList());
            },
            pullUpRefresh() {
                dispatch(actionTypes.changePullUpLoading(true));
                dispatch(actionTypes.refreshMoreLessonsInfoRequest());
            },
            //顶部下拉刷新
            pullDownRefresh() {
                dispatch(actionTypes.getLessonsList());
                dispatch(actionTypes.changePullDownLoading(true));
            },
        };
    }
)(Lessons);
