import React from 'react'
import './Shop.css'
export default function Shop(props) {
    // console.log(props);
    const { shop } = props;
    return (
        <div className="shopitems">
            <div className="shopimg">
                <img src={`/asserts/find-images/${shop.image}.png`} alt="" width="90px" />
            </div>

            <div className="shop-detail">
                <div className="note1">{shop.note1}</div>
                <div className="note2">{shop.note2}</div>
                <div className="price">￥{shop.price}</div>
            </div>
        </div>

    )
}
