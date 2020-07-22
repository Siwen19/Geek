import styled, { css } from 'styled-components';

export  const Top = styled.div`
    
    display: flex;
    justify-content: space-between;
    padding: 2px 12px;
    background-color: white;
    & > span {
        line-height: 25px;
        font-size: 20px;
        &.iconfont{
            font-size:20px;
        }
    }
`

export const Search = styled.input`

`