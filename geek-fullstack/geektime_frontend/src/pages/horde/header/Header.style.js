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
    a:first-child {
      color: #000000;
      font-size: 22px;
      font-weight: 500;
      border-bottom: 2px solid #fa8919;
    }
    a { 
    padding: 2px 0;
    font-size: 16px;
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
        font-size: 22px;
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
        width: 40px;
        height: 40px;
        top: .8vh;
        z-index: 1;
        border-radius: 50%;
    }
`;