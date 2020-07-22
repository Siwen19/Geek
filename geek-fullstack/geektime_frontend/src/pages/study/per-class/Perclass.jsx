import React from 'react'
import './Perclass.css'
export default function (props) {
    // console.log(props);
    const { pclass } = props;
    return (
        <div className="pclass-wrapper">
            <div className="les-img">
                <img src={`/asserts/study-images/${pclass.image}.png`} alt="" className="pclass-image" />
            </div>
            <div className="pcl-info">
                <div className="perclass-title">{pclass.title}</div>
                <div className="pcl-teacher-job">{pclass.teacher} {pclass.job}</div>
                <div className="pcl-finished">{`已学${pclass.finished}%`}</div>
            </div>

        </div>
    )
}