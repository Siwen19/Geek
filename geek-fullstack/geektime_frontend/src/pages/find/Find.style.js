import styled, { css } from 'styled-components';

export  const Top = styled.div`
    background-color: white;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    padding: 2px 12px;
    & > span {
        line-height: 25px;
        font-size: 20px;
        margin-top: -44px;
        
        &.iconfont{
            font-size:20px;
            margin-top: -44px;
        }
    }
`

export const Search = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
    height: 25px;
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
            font-size: 25px;
            margin-left: -160px;
        }
    }

`


