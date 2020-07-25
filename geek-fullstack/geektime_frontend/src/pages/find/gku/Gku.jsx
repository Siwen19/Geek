import React from 'react'
import './Gku.css'
export default function Gku(props) {
    // console.log(props);
    const { gku } = props;
    return (
        <div className="gkuitems">
            <div className="gkuimg">
                <img src={`/asserts/find-images/${gku.image}.png`} alt="" width="140px" />
            </div>

            <div className="gku-detail">
                <div className="type">{gku.type}</div>
                <div className="note1">{gku.note1}</div>
                <div className="teacher-job">{gku.teacher} {gku.job}</div>
                <div className="time">{gku.time}</div>
            </div>
        </div>

    )
}

