import React, { useState,useEffect} from 'react'
import Swiper from 'swiper/bundle'
import './Swiper.css';  
import 'swiper/swiper-bundle.cjs'

export default function MySwiper() {
    let [state] = useState([
        ["/swiper1.png"],
        ["/swiper2.png"],
        ["/swiper3.png"]
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
        <div className="swiper-container find">
                <div className="swiper-wrapper" >
                    {
                        state.map((slider, id) => {
                            return (
                                <div className="swiper-slide" key={id}>  
                                    <img src={slider} alt="" width="200px"/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
    )
}
