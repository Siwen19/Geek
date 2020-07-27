import React, { useEffect } from 'react';
import Path from './learn-path/Path';
import Direction from './lesson-direction/Direction';
import AllLessons from './allLessons/allLessons';
import { Tab, Content } from './index.style';
import { connect } from 'react-redux';
import * as actionTypes from './store/actions';
import { renderRoutes } from 'react-router-config'
import Scroll from '../../../components/scroll/Scroll' 

function Lessons(props) {
    const { route, studyPath, lessonsDirection, allLessons, enterLoading, getLessonsListDataDispatch } = props;
    // console.log(studyPath, lessonsDirection, allLessons, enterLoading); 
    useEffect(() => {
        if (!studyPath.length) {
            getLessonsListDataDispatch();
        }
    }, []);

    return (
        <>
        {renderRoutes(route.routes)}
        <Content>
            <Scroll>
                <Tab> 
                    <Path data={studyPath} />
                    <Direction data={lessonsDirection} />
                    <AllLessons data={allLessons} path={route} />
                </Tab>
            </Scroll>
        </Content>
        </>

    )
}

export default connect(function mapStateToProps(state) {
    return {
        studyPath: state.lessons.studyPath,
        lessonsDirection: state.lessons.lessonsDirection,
        allLessons: state.lessons.allLessons,
        enterLoading: state.lessons.enterLoading
    };
}, function mapDispatchToProps(dispatch) {
    return {
        getLessonsListDataDispatch() {
            dispatch(actionTypes.getLessonsList());
        }
    }
})(Lessons);