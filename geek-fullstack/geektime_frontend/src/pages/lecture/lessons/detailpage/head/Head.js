import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { TabHead, HeadInner, HeadImage, ImageStatus, RightItem
, RightTitle, SubTitle, Teacher, Add, TabCenter, Service} from './style';
import * as actionsTypes from '../store/actionCreators';
import { useParams } from 'react-router';

function Head(props) {  
    const { getTitleDataDispatch } = props;
    const { titleContent, personId } = props;  
    const id = useParams();  
    useEffect(() => {  
        if (!titleContent.length) { 
            getTitleDataDispatch(id);
        }    
    }, []);   
    return (
        <TabHead> 
            <HeadInner>
                <HeadImage>
                    <img src={Object.keys(titleContent).length && titleContent.author.avatar}></img>
                    <ImageStatus>
                    <span>未完结</span>
                    </ImageStatus>
                </HeadImage> 
                <RightItem>
                <div>
                    <RightTitle>{Object.keys(titleContent).length && titleContent.title} </RightTitle>
                    <SubTitle>{Object.keys(titleContent).length && titleContent.subtitle}</SubTitle>
                </div>
                <div>
                    <Teacher>讲师：{Object.keys(titleContent).length && titleContent.author.name}</Teacher>
                    <Add>
                        <span>+</span>收藏
                    </Add>
                </div> 
            </RightItem> 
            </HeadInner> 
            <TabCenter>
                <div>
                共{Object.keys(titleContent).length && titleContent.unit}
                <span>·约{Math.floor(titleContent.total_length / 3600)}小时
                {(Number(((titleContent.total_length / 3600).toFixed(2)).toString().split('.')[1]) / 100 * 60).toFixed(0)}
                分钟</span>
                </div>
                <div>{Object.keys(titleContent).length && titleContent.extra.sub.count}人已学习</div>
            </TabCenter>
            <Service>
                    <div><span className="iconfont">&#xe611;</span>学习服务</div>
                    <div>
                    无限回看、结课证书、奖励礼券
                        <span></span>
                    </div>
                </Service>
        </TabHead>
    )
}

const mapStateToProps = (state) => {
    return {
        personId: state.personColumn.personId,
        titleContent: state.personColumn.titleContent,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTitleDataDispatch(id) {
            dispatch(actionsTypes.changePersonId(id))
            dispatch(actionsTypes.getTitleContent())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Head));