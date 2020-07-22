import React ,{ useState, useEffect }from 'react';
import './Study.css';
import Header from './header/Header';
import Practice from './practice/Practice';
import Lessons from './lessons/Lessons'
import Perclass from './per-class/Perclass'
function Study() {
    const [studyList, setState] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/study/study.json')
            .then(data => data.json())
            .then(res => setState(res))  
    }, []);
    // console.log(studyList);
    const newPractice = studyList.practice !== undefined ? studyList.practice : [];
    const newLessons = studyList.lessons !== undefined ? studyList.lessons : [];
    const newPerClass = studyList.perclass !== undefined ? studyList.perclass : [];
    return (
        <div className="study-wrapped"> 
            <Header />
            <div className="study-contents">
                <div className="study-contents-title">正在学习</div>
                <div className="type">训练营</div>
                <div className="practice"> 
                    {newPractice.map((ele, i) => <Practice key={i} p={ele}/>)}
                </div>
                <div className="type2">课程</div>
                <div className="lessons">
                    {newLessons.map((ele, i) => <Lessons key={i} l={ele}/>)}
                </div>
                <div className="type3">每日一课</div>
                <div className="perclass">
                    {newPerClass.map((ele, i) => <Perclass key={i} pclass={ele}/>)}
                </div>
            </div>
            
        </div>
    )
}

export default Study;