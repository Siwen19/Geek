import styled from "styled-components";

export const Wrap = styled.div `
    min-height: 100vh;
`;
export const TabNav = styled.div `
    margin-left: -12px;  
`;

export const NavWrapper = styled.div `
    position: relative;
    height: 50px; 
    display: flex; 
    align-items: center;
    white-space: nowrap;
    background: #fff; 
    box-sizing: border-box;
`;
export const InnerItem = styled.div `
    flex: 1; 
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    color: #4c4c4c;
    overflow: hidden;
`;
export const InnerDiv = styled.div `
    display: flex; 
    align-items: center; 
    justify-content: center;
    & > span {
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-family: PingFang SC, Helvetica Neue, Verdana, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
        }
    & > span.iconfont img {
        width: 4vw; 
        height: 2vh; 
        margin-top: 1vh; 
        margin-left: .5vw;
    }
`;
export const ContentItem = styled.div `
    padding: 0 15px;
    margin-bottom: 9vh; 
`;

export const Content = styled.div`
  position: fixed;
  top: 90px;
  bottom: 0;
  width: 100%;
`