import React from 'react'
import './Class.css'
export default function Class(props) { 
    const { cls } = props;
    return (
        <div className="clsitems">
            <div className="clsimg">
                <img src={`/asserts/find-images/${cls.image}.png`} alt="" width="120px" />
            </div>

            <div className="cls-detail">
                <div className="note">{cls.note}</div>
            </div>
        </div>

    )
}
