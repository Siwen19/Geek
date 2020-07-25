import styled from 'styled-components'; 

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  overflow: hidden;
  background: #fff;
  transform-origin: right bottom; 
`

export const Head = styled.div`
  height: 44px;
  line-height: 44px;
  width: 100vw;
  font-size: 18px;
  position: fixed;
  text-align: center;  
  display: flex;
  flex-direction: row;
  justify-content: space-between;  
  color: #000;
  & > span:last-child {
      font-size: 16px;
      color: #ccc;
      margin-right: 5vw;
  }
`
export const Nav = styled.div`
  margin-top: 44px;   
  height: 35vh; 
  width: 100vw;
  font-size: 18px;
  position: fixed; 
  text-align: center;  
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;  
  color: #000;
`
export const NavHead = styled.div`  
  height: 18vh; 
  width: 80vw;  
  text-align: center;  
  display: flex;
  flex-direction: column;  
  justify-content: center; 
  & > span {
      margin-bottom: 10px;
  }
  & > span:first-child {
    font-size: 28px;
  } 
  & > span:nth-child(2) {
    font-size: 16px;
  }
  & > span:last-child {
      font-size: 16px;
  }
`
export const NavImage = styled.div`  
  height: 15vh; 
  width: 100vw;    
  position: relative; 
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(240, 240, 240);
  & > img { 
      margin-left: -35%;
      margin: 10px; 
      width: 95%; 
  }  
`
export const CenterWrapper = styled.div ` 
    display: flex; 
    flex-wrap: wrap;
    margin-top: 40vh;
    padding: 10px; 
    & > p {
        margin: 10px 10px;
        color: #000;
        & > span {
            color: rgb(200, 200, 200);
            font-size: 14px
        }
    }
`
export const Center = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(33.333% - 5px); 
    height: 47px;
    line-height: 18px;
    margin-bottom: 7px;
    margin-right: 5px;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #666;
    word-break: break-all;
    line-height: 1.6;
    overflow: hidden; 
    background: rgb(247, 247, 247);
    font-weight: normal;
    border-radius: 6px; 
    box-sizing: border-box;
    text-align: center; 
    font-family: "PingFang SC", "Lantinghei SC", "Microsoft Yahei", "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", Helvetica, sans-serif;
    :nth-child(2n-1) {
        color: #666;
        background: rgb(247, 247, 247);
    }
    :nth-child(3n) {
        margin-right: 5px; 
    }
    :nth-child(2n-1) {
        color: #666;
        background: rgb(247, 247, 247);
    }
`;

export const CenterBar = styled.div`
    width: 80vw;
    height: 6vh;
    line-height: 6vh;
    background-color: orange;
    margin: 3vw auto; 
    font-size: 18px;
    text-align: center;
    border-radius: 5px;  
`;

export const Content = styled.div` 
  display: flex;
  flex-wrap: wrap;  
`