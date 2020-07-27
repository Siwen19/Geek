import styled, { css } from 'styled-components';

export  const Top = styled.div`
    background-color: #fff; 
    display: flex; 
    width: 100vw;
    height: 44px;
    top: 0;
    z-index: 2;
    position: fixed;
    justify-content: space-between; 
    left: 0; 
    & > span {
        line-height: 25px;
        font-size: 20px; 
        padding: 15px;
        
        &.iconfont{
            font-size:25px; 
        }
    }
`

export const Search = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 25px;
    padding-top: 2vh;
    & > input {
        outline-style: none;
        border: 0px solid #ccc;
        border-radius:25px;
        padding: 5px 5px; 
        width: 92%;
        background: #f5f5f5;
        text-indent: 25px;
        font-size: 14px; 
    }
    & > span {
        position: absolute;
        &.iconfont {
            font-size: 20px;
            margin-left: -160px;
        }
    } 
`
export const Content = styled.div`
  position: fixed; 
  top: 44px;
  bottom: 0; 
  margin-bottom: 55px;
  width: 100%;
`


