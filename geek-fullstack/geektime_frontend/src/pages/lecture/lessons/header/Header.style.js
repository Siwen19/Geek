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
    & > a {
        font-size: 21px;
        font-weight: 500;
        color: #353535;
        text-decoration: none;
        display: flex; 
        align-items: center;
        height: 44px;
        margin-right: 27px;
        font-size: 19px;
        color: #a5a5a5;
        font-weight: 400; 
        transition: color 0.3s;
    }
`;
export const Nav = styled.div `
    & > img {
        position: fixed;
        right: 4.38596vw;
        width: 20px;
        height: 20px;
        top: 1.5vh;
        z-index: 100;
    }
`;