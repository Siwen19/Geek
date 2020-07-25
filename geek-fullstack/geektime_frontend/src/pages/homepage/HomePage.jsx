import React, {useState, useEffect } from 'react';
import './HomePage.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import Article from './article/Article';
import { connect } from 'react-redux';
import {changeDefaultMoney} from './account/store/actions';

function HomePage(props) {
    const { route, investMoney } = props;  
    const [homeList, setState] = useState([]); 
    useEffect(() => {
        fetch('http://localhost:8080/rest/homepage.json')
            .then(data => data.json())
            .then(res => setState(res))
    }, [])
    const aticle = Object.keys(homeList).map((ele, i) =>
        <Article data={homeList[ele]} path={route} key={i} remain={investMoney} />
    );
    return (
        <div className='Home_Wrapper'>  
            <Header />
            <Navigation />
                {aticle} 
        </div>
    );
} 
const mapStateToProps = (state) => {
    return {
        investMoney: state.investMoney.money, 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInvestMoney(data) {
            dispatch(changeDefaultMoney(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);   