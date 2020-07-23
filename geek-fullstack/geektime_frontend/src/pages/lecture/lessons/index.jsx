import React, {useEffect} from 'react';
import Header from './header/Header';
import Path from './learn-path/Path'; 
import Direction from './lesson-direction/Direction';
import AllLessons from './allLessons/allLessons';
import {Tab} from './index.style'; 
import { connect } from 'react-redux'; 
import * as actionTypes from './store/actions';

function Lessons(props) {   
    const {studyPath, lessonsDirection, allLessons, enterLoading, getLessonsListDataDispatch} = props;
    // console.log(studyPath, lessonsDirection, allLessons, enterLoading);

    useEffect(() => {
        if (!studyPath.length) {
            getLessonsListDataDispatch();
        } 
    }, []);
    
    return (  
        <Tab>
            <Header />
            <Path data={studyPath}/>
            <Direction data={lessonsDirection}/>
            <AllLessons data={allLessons}/>
        </Tab>
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