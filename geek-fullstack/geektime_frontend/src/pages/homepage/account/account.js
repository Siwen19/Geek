import React, { useCallback, useState } from 'react';
import { Container, Head, Nav, NavHead, NavImage, 
    Center, CenterWrapper, CenterBar, Content } from './style';
import { connect } from 'react-redux';
import {changeDefaultMoney} from './store/actions';

function Account(props) {  
    const [state, setState] = useState("");
    const { investMoney, changeInvestMoney } = props;
    const onBack = useCallback(() => {
        window.history.back();
      }, []);
    const handleClickEvent = (e) => {
        for (let child of e.target.parentNode.childNodes) {
            child.style.backgroundColor = "rgb(247, 247, 247)";
        }
        e.target.style.backgroundColor = "orange"; 
        setState(e.target.id);
    }
    const handleInvestMoney = () => {
        let wrapper = document.querySelector('.wrapper');  
        for (let child of wrapper.childNodes) {
            child.style.backgroundColor = "rgb(247, 247, 247)";
        }  
        changeInvestMoney(state);
    }
    return ( 
        <Container>
           <Head>
           <svg width="42" height="42" onClick={onBack}>
                    <polyline points="25, 13 16, 21 25, 29"
                        stroke="#ccc"
                        strokeWidth="2"
                        fill="none" />
            </svg>
            <span>账户</span>
            <span>兑换入口</span>
           </Head>
           <Nav>
    <NavHead><span>{investMoney}</span>
                <span>充值币 0.00 | 赠币 0.00</span>
                <span>查看明细</span></NavHead>
                <NavImage>
                    <img src="/asserts/invest.png"></img>
                </NavImage>
           </Nav>
           <CenterWrapper>
               <p>充值<span>（充值金额仅限Android系统使用）</span></p> 
               <Content onClick={handleClickEvent} className="wrapper">
           <Center id="6">$ 6</Center><Center id="12">$ 12</Center><Center id="68">$ 68</Center>
           <Center id="108">$ 108</Center><Center id="218">$ 218</Center><Center id="318">$ 318</Center>
           <Center id="418">$ 418</Center><Center id="648">$ 648</Center><Center id="998">$ 998</Center>
           </Content>
           <CenterBar onClick={handleInvestMoney}>确认充值</CenterBar> 
           </CenterWrapper>
        </Container> 
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);