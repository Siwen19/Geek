import React from 'react';
import { TabHead, HeadInner, HeadImage, ImageStatus, RightItem
, RightTitle, SubTitle, Teacher, Add, TabCenter, Service} from './style';

function Head() {
    return (
        <TabHead>
            <HeadInner>
                <HeadImage>
                    <img src="https://static001.geekbang.org/resource/image/99/b3/99e02ba6abf8e09dyy6d1d7951489ab3.jpg?"></img>
                    <ImageStatus>
                    <span>未完结</span>
                    </ImageStatus>
                </HeadImage> 
                <RightItem>
                <div>
                    <RightTitle>如何看懂一幅画 </RightTitle>
                    <SubTitle>从油画开始，提升审美能力</SubTitle>
                </div>
                <div>
                    <Teacher>讲师：罗桂霞</Teacher>
                    <Add>
                        <span>+</span>收藏
                    </Add>
                </div> 
            </RightItem> 
            </HeadInner> 
            <TabCenter>
                <div>
                共22讲
                <span>·已更新4讲</span>
                </div>
                <div>652人已学习</div>
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
export default Head;