import React, { useState, useEffect } from 'react';
import Header from './header/Header';
import Path from './learn-path/Path'; 
import Direction from './lesson-direction/Direction';
import AllLessons from './allLessons/allLessons';
import {Tab} from './Lessons.style';

export default function Lessons() {
    const [pathList, setPathList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/lessons/Lessons.json")
            .then(data => data.json())
            .then(res => setPathList(res));
    }, []) 
    return (
        <Tab>
            <Header />
            <Path data={pathList.STUDY_PATH_TITLE} />
            <Direction data={pathList.LESSONS_DIRECTION_TITLE} />
            <AllLessons data={pathList.ALL_LESSONS_LESSONS}/>
        </Tab>
    )
}