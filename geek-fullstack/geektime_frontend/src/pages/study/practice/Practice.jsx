
import React from 'react'
import './Practice.css'
export default function Practice(props) {
    // console.log(props);
    const { p } = props;
    return (
        <div className="practice-wrapper">
            <div className="pra-img">
                <img src={`/asserts/study-images/${p.image}.png`} alt="" className="p-image" />
            </div>
            <div className="pra-info">
                <div className="practice-title">{p.title}</div>
                <div className="pra-total-time">{`共${p.total}讲`} | {`${p.time}小时`}</div>
                <div className="pra-type">{p.type}</div>
            </div>

        </div>
    )
}
