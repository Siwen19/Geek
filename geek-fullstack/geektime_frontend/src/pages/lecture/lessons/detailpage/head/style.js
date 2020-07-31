import styled from 'styled-components';

export const TabHead = styled.div`
    position: relative;
    padding: 20px 20px 17px 20px;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #fff;  
    border-top: 1px solid rgb(240, 240, 240); 
`
export const HeadInner = styled.div`
    display: flex;
`
export const HeadImage = styled.div`
    position: relative;
    width: 82px;
    min-width: 82px;
    height: 108px;
    border-radius: 4px;
    background: #e8e8e8;
    box-shadow: 0px 0px 14px 2px rgba(109,109,109,0.18);
    overflow: hidden;
    & > img {
        width: 100%;
        height: 100%;
        border: 0;
    }
`
export const ImageStatus = styled.div`
    position: absolute;
    right: 3px;
    bottom: 2px;
    height: 15px;
    line-height: 13px;
    text-align: center;
    background: rgba(0,0,0,0.35);
    border-radius: 2px;
    & > span {
        display: inline-block;
        font-size: 12px;
        font-weight: 400;
        color: #fff;
        transform: scale(0.8);
    }
`
export const RightItem = styled.div`
    display: flex;
    flex: 1;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 14px;
    padding: 4px 0;
    overflow: hidden; 
`

export const RightTitle = styled.div`
    position: relative;
    width: 100%;
    font-size: 19px;
    font-weight: 500;
    color: #404040;
    min-width: 0;
    white-space: normal;
    word-break: break-all;
    line-height: 1.2;
    overflow: hidden;
    display: -webkit-box;
`
export const SubTitle = styled.div`
    width: 100%;
    margin-top: 4px;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 400;
    color: #4c4c4c;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
` 
export const Teacher = styled.div`
    width: 170px;
    font-size: 12px;
    font-weight: 400;
    color: #4c4c4c;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`
export const Add = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 4px;
    right: 0;
    height: 24px;
    padding: 0 8px;
    font-size: 13px;
    font-weight: 400;
    color: #fa8919;
    border: 1px solid rgba(250,137,25,0.4);
    border-radius: 12px;
    box-sizing: border-box;
    >span {
        height: 24px;
        line-height: 20px;
        margin-right: 2px;
        font-size: 20px;
    }
`       
export const TabCenter = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 49px;
    margin-top: 15px;
    padding: 0 13px;
    color: #ccc;
    background: #fefcf9;
    border-radius: 5px;
    border: 0.5px solid #f4e8d6;
    box-sizing: border-box;
    >div {
        font-size: 14px;
        font-weight: 400;
        color: #945945; 
    }
`
export const Service = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 20px;
    margin-top: 20px; 
    >div:first-child {
        font-size: 16px;
        font-weight: 500;
        color: #4c4c4c;
        >span {
            margin-right: 5px;
            font-size: 14px;
            color: #fa8919;
        }
    }
    >div:last-child {
        position: relative;
        padding-right: 20px;
        font-size: 13px;
        font-weight: 400;
        color: #888;
        >span {
            display: inline-block;
            position: absolute;
            top: 10px;
            right: 0;
            width: 13px;
            height: 3px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAMCAYAAAAtUZ4rAAABn0lEQVRIS92WvUsjURTFz3nxI7KKjX+CHxCt7G1EQbFLJlO4uMVuubBdmMQqlcmQTrDUQsHi5WU62QU7rbXaiBv3T9hG3EX84N1lxAELHV6ENJliqt8759z33ty5RI+eRqPxwVr7TUQ+ApiJbUheAjhUSm2XSqV/vbBmIqq1HlFKTYnIKMlra+2V7/v37zGt1WqTJI8ATL+xviMia5VK5fd79LXWQ89Zx0n+fc56+7Rp8avVam2IyA6AscSA5B9r7adisfi9G9NqtTqazWbPUopJ5DqZTGa+25NqNpurSql9EZl4keuG5NdCoXDAKIoWrbXHANQrwe+stfO+71+4FhWGYUVEtlx4kptBENRc2JjRWueUUucAhl9ZY5VSyzTGnABYSBHd8zzvi6tpvV7/CWDWkW+Xy+U5RxbGmF0An1P407ig+DsZTIEuPM9zCigiDMMw1htwDPkYBMEQSXHhjTFtALkU9qEvC+qvK9dPTYHkUmrbJrmRz+d/uNzvhOl1246iaEVEDt5s2335Y+3mBFzZZPQBsC4iyejzq9ejz3+x9QI40Nc4awAAAABJRU5ErkJggg==) center center no-repeat;
            background-size: contain;
        }
    }
`