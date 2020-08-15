import React, { Component } from 'react';
import Swiper from 'swiper/bundle';
import { useState } from 'react';
import { useEffect } from 'react';
import 'swiper/swiper-bundle.css';
import './Navigation.css';

export default function Navigation() {
    let [state] = useState([
        ["/asserts/swiper_one.png"],
        ["/asserts/swiper_two.png"],
        ["/asserts/swiper_three.png"]
    ]);

    useEffect(() => {
        new Swiper(".swiper-container", {
            loop: true,
            autoplay: {
                delay: 2500
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }
        })
    }, [])
    return (
        <div className='navigation_wrapper'>
            <div className="user-info">
                <div className="user-avatar">
                    <img src="/asserts/avatar.jpg" alt="" />
                </div>
                <div className="user-details">
                    <span className="username">Candy</span>
                    <span className="user-tel">150*****221</span>
                </div>
                <div className="user-page">
                    <span className="personal-page">个人主页</span>
                    <svg width="42" height="32">
                        <polyline points="27, 14 34, 19 27, 24"
                            stroke="orange"
                            strokeWidth="2"
                            fill="none" />
                    </svg>
                </div>
            </div>

            <div className="swiper-container">
                <div className="swiper-wrapper" >
                    {
                        state.map((slider, id) => {
                            return (
                                <div className="swiper-slide" key={id}>
                                    <img src={slider} alt="" />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}