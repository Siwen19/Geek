import React, { useState, useEffect } from 'react';
import './HomePage.css';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import Article from './article/Article';
import { connect } from 'react-redux'; 
import { renderRoutes } from 'react-router-config';
import Scroll from '../../components/scroll/Scroll';
import styled from 'styled-components';
import * as actionTypes from './store/actions'

export const Content = styled.div`
  position: fixed;
  top: 44px;
  bottom: 0;
  margin-bottom: 55px;
  width: 100%;
`

function HomePage(props) {
    const { route, homeList, remain } = props;  
    const { getHomePageDataDispatch } = props; 
    useEffect(() => { 
        getHomePageDataDispatch();
    }, [])
    const aticle = Object.keys(homeList).map((ele, i) =>
        <Article data={homeList[ele]} path={route} key={i} remain={remain}/>
    );
    return (
        <>
        <Header />
                    {renderRoutes(route.routes)}
        <Content>
            <Scroll>
                <div className='Home_Wrapper'> 
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
        remain: state.investMoney.money,
        homeList: state.homeData.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getHomePageDataDispatch() {
            dispatch(actionTypes.getListInfo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);   