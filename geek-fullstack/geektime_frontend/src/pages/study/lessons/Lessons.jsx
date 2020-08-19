import React from 'react'
import './Lessons.css'
export default function Lessons(props) { 
    const { l } = props;
    return (
        <div className="lessons-wrapper">
            <div className="les-img">
                <img src={`study-images/${l.image}.png`} alt="" className="l-image" />
            </div>
            <div className="les-info">
                <div className="lessons-title">{l.title}</div>
                <div className="les-total-time">{`共${l.total}讲`} | {`已学${l.finished}讲`}</div>
                <div className="les-type">{l.type}</div>
            </div>

        </div>
    )
}
