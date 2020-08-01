import styled from 'styled-components';

export const Container = styled.div` 
    background-color: rgb(245, 245, 245);
    transform-origin: right bottom; 
    font-family: PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;
`
export const Background = styled.div`
    position: fixed;
    top: 0;
    z-index: 200;
    width: 100vw; 
    background-color: rgb(245, 245, 245);
    height: 100vh; 
`
export const Head = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 15px;
    display: flex; 
    align-items: center;
    background: #fff;  
  & > img {
      width: 8vw;
      height: 4vh; 
      margin-top: 1vh;
      margin-right: 2vw;
  }
  & > .star {
      margin-left: 65vw;
  }
`
export const Content = styled.div`  
  position: fixed;
  top: 48px;
  bottom: 15px;
  width: 100%;  
  z-index: 100;
`