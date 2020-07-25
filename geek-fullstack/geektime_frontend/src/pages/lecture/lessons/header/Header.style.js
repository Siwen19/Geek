import styled from "styled-components";

export const Tab = styled.div `
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 15px;
    display: flex; 
    align-items: center;
    background: #fff; 
    box-shadow: inset 0px -1px 1px -1px #ccc;
    font-family: "PingFang SC", "Lantinghei SC", "Microsoft Yahei", "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", Helvetica, sans-serif;
    a { 
    padding: 2px 0;
    font-size: 21px;
    color: #a5a5a5;
    text-decoration: none;
    display: flex; 
    align-items: center;
    height: 44px;
    margin-right: 27px;  
    &.selected {
      span {
        border-bottom: 2px solid #fa8919;
        padding: 3px 0;
        font-weight: 700;
        color: #353535;
        transition: border-bottom .2s
      }
    }
  }
`;
export const Nav = styled.div `
    & > img {
        position: fixed;
        right: 4.38596vw;
        width: 20px;
        height: 20px;
        top: 1.5vh;
        z-index: 1;
    }
`;