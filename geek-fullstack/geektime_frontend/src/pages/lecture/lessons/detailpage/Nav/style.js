import styled from 'styled-components';

export const NavContent = styled.div`
    > div {
        display: flex;
        position: relative;
        white-space: nowrap;
        justify-content: space-around;
        background-color: #fff;
        > a {
            height: 45px !important;
            line-height: 45px !important;
            text-decoration: none;
            display: block;  
            position: relative;
            font-weight: 500;
            color: #b2b2b2;
            &.selected { 
                border-bottom: 2px solid #fa8919;  
                font-size: 18px;
                color: #353535;
                transition: border-bottom .2s 
    }
        }  
        > a:nth-child(2) {  
            > span {
                position: absolute;
                font-size: 12px;
                right: -32px;
                top: 5px;
                display: inline-block;
                width: 28px;
                height: 16px;
                line-height: 16px;
                text-align: center;
                background: #fff3e4;
                border-radius: 8px 8px 8px 0px;
                > span {
                    display: inline-block;
                    font-size: 12px;
                    color: #fa8919;
                    transform: scale(0.8);
                }
            }
        }
    }
`

// export const TabBar = styled.div`
//     a { 
//     padding: 2px 0;
//     font-size: 16px;
//     color: #a5a5a5;
//     text-decoration: none;
//     display: flex; 
//     align-items: center;
//     height: 44px;
//     margin-right: 27px;  
    
//     }
//     }
// `