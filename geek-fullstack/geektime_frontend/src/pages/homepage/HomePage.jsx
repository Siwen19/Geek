import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import Article from './article/Article';
import { connect } from 'react-redux';
import { changeDefaultMoney } from './account/store/actions';
import { renderRoutes } from 'react-router-config';
import Scroll from '../../components/scroll/Scroll';
import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  top: 44px;
  bottom: 0;
  margin-bottom: 55px;
  width: 100%;
`

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
        <>
        <Header />
        <Content>
            <Scroll>
                <div className='Home_Wrapper'> 
                    {renderRoutes(route.routes)}

                    <Navigation />
                    {aticle}
                </div>
            </Scroll>
        </Content>
        </>
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