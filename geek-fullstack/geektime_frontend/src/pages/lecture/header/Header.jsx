import React, { useState } from 'react';
import './Header.css';

export default function Header() {
    const [left, setLeft] = useState("24.0038px");

    const handleUnderlineFloat = (text) => {
        switch (text) {
            case "训练营": setLeft("100.008px"); return;
            case "每日一课": setLeft("190.0038px"); return;
            case "课程": setLeft("24.0038px"); return;
            default: return;
        }
    }
    return (
        <div className="header-wrapper">
            <div className="_2Oz4cIB9_0"></div>
            <div className="jJEiK9rJ_0">
                <a href="#" className="_2tc9QgEi_0 _3hjOZUBV_0" onClick={handleUnderlineFloat.bind(this, "课程")}>课程</a>
                <a href="#" className="_2tc9QgEi_0 _3hjOZUBV_0" onClick={handleUnderlineFloat.bind(this, "训练营")}>训练营</a>
                <a href="#" className="_2tc9QgEi_0 _3hjOZUBV_0" onClick={handleUnderlineFloat.bind(this, "每日一课")}>每日一课</a>
                <div className="rrpGGVg7_0" style={{ left: left }}></div>
            </div>
            <div className="header-search">
                <img src="/asserts/search.png" alt="" className="header-image" />
            </div> 
        </div>
    )
}