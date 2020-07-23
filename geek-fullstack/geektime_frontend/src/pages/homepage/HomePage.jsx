import React, {useState, useEffect } from 'react';
import './HomePage.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import Article from './article/Article';

export default function HomePage() {
    const [homeList, setState] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/rest/homepage.json')
            .then(data => data.json())
            .then(res => setState(res))
    }, [])
    const aticle = Object.keys(homeList).map((ele, i) =>
        <Article data={homeList[ele]} key={i} />
    );
    return (
        <div className='Home_Wrapper'> 
            <Header />
            <Navigation />
            {aticle}
        </div>
    );
}   