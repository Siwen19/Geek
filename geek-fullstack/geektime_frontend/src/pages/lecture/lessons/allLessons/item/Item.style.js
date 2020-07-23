import styled from "styled-components";

export const Wrapper = styled.div ` 
    display: flex;
    margin-bottom: 27px;
    z-index: -1;
`;
export const ImageWrapper = styled.div ` 
    position: relative;
    display: block;
    width: 82px;
    height: 108px;
    margin-right: 16px;
    & > img {
        width: 82px;
        height: 108px;
        background-color: #eaeaea;
        border-radius: 4px; 
    }
`;
export const TitleWrapper = styled.div `  
    flex: 1;
    padding-top: 4px;
    overflow: hidden;
    & > h3 {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        line-height: 19px;
        font-size: 18px;
        font-weight: bold;
        color: #4c4c4c;
        max-width: 230px;
        font-family: PingFang SC, Helvetica Neue, Verdana, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    }
`;
export const TeacherWrapper = styled.div ` 
    display: flex;
    overflow: hidden;
    padding-top: 8px;
    line-height: 17px;
    & > span:first-child {
        padding: 0 3px;
        margin-right: 3px;
        background-color: #f1f1f1;
        border-radius: 2px;
        line-height: 18px;
        font-size: 12px;
        font-weight: 400;
        color: #767676;
        border-radius: 2px; 
        max-width: 70px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    & > span:last-child {
        padding: 0 3px;
        margin-right: 3px;
        background-color: #f1f1f1;
        border-radius: 2px;
        line-height: 18px;
        font-size: 12px;
        font-weight: 400;
        color: #767676;
        border-radius: 2px;
        max-width: 180px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`;
export const LessonsWrapper = styled.div `  
    padding-top: 8px; 
    line-height: 12px; 
    font-size: 12px; 
    color: #767676;
    overflow: hidden; 
`;
export const DetailsWrapper = styled.div `  
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;
export const InnerLeftItem = styled.div `  
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > span:first-child {
        display: inline-block;
        width: 30px;
        height: 15px;
        margin-right: 8px;
        line-height: 15px;
        text-align: center;
        font-size: 12px;
        font-weight: 500;
        border-radius: 3px;
        width: 50px;
        color: #fa8919;
        border: 1px solid #fa8919;
        & > span {
            display: inline-block;  
            transform: scale(0.9);
            font-family: PingFang SC, Helvetica Neue, Verdana, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
        }
    } 
    & > span:nth-child(2) {
        font-size: 16px;
        font-weight: 500;
        color: #fa8919;
    }
    & > span:last-child {
        margin-left: 8px;
        font-size: 12px;
        font-weight: 400;
        color: #b2b2b2;
        text-decoration: line-through;
    }
`;
export const RightItem = styled.div `  
    padding: 0 15px;
    height: 27px;
    line-height: 27px;
    font-size: 15px;
    font-weight: 500;
    color: #fa8919;
    background-color: #fbf5ee;
    border-radius: 15px;
    font-family: PingFang SC, Helvetica Neue, Verdana, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
`;