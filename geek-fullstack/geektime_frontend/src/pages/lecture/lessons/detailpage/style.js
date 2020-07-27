import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 43px;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    height: 100%;
    overflow: hidden;
    background-color: rgb(245, 245, 245);
    transform-origin: right bottom; 
    font-family: PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, Helvetica, sans-serif;
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
    border-bottom: 1px solid rgb(240, 240, 240);
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
  top: 90px;
  bottom: 0;
  width: 100%;
`