import React from 'react';
import './Item.css'; 

export default function Item(props) { 
    const {data} = props;
    return (
        <li className="_3GlmVLy1_0">
            <div className="_1Iiv0e7b_0">
                <div className="WPzodXXR_0">
                    <div className="cP6BpbRO_0">{data.job}</div>
                    <div className="_3z7FHrLu_0">{data.lessons_nums}</div>
                </div> 
                <img src={data.image} alt="" /> 
                <div className="Iv1fkdeg_0"></div>
            </div>
        </li>
    )
};
