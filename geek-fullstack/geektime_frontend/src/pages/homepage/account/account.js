import React, { useCallback, useState } from 'react';
import { Container, Head, Nav, NavHead, NavImage, 
    Center, CenterWrapper, CenterBar } from './style'

function Account() { 
    const [money, setMoney] = useState("");
    const onBack = useCallback(() => {
        window.history.back();
      }, []);
    const handleClickEvent = (e) => {
        console.log(e.target.id)
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
                <NavHead><span>$0.00</span>
                <span>充值币 0.00 | 赠币 0.00</span>
                <span>查看明细</span></NavHead>
                <NavImage>
                    <img src="/asserts/invest.png"></img>
                </NavImage>
           </Nav>
           <CenterWrapper onClick={handleClickEvent}>
               <p>充值<span>（充值金额仅限Android系统使用）</span></p>
           <Center id="6">$ 6</Center><Center id="12">$ 12</Center><Center id="68">$ 68</Center>
           <Center id="108">$ 108</Center><Center id="218">$ 218</Center><Center id="318">$ 318</Center>
           <Center id="418">$ 418</Center><Center id="648">$ 648</Center><Center id="998">$ 998</Center>
           <CenterBar>确认充值</CenterBar> 
           </CenterWrapper>
           
        </Container> 
    )
}

export default Account;