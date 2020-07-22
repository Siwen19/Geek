import React from 'react';
import "./Item.style.js";
import {
    Wrapper, ImageWrapper, TitleWrapper, TeacherWrapper, LessonsWrapper,
    DetailsWrapper, InnerLeftItem, RightItem
} from './Item.style';

export default function Item(props) {
    const { data } = props;
    return (
        <Wrapper>
            <ImageWrapper>
                <img src={data.image} alt="" />
            </ImageWrapper>
            <TitleWrapper>
                <h3>{data.teach_title}</h3>
                <TeacherWrapper>
                    <span>{data.teacher}</span>
                    <span>{data.status}</span>
                </TeacherWrapper>
                <LessonsWrapper>
                    {data.lessons} | {data.learners}
                </LessonsWrapper>
                <DetailsWrapper>
                    <InnerLeftItem>
                        <span>
                            <span>新人首单</span>
                        </span>
                        <span>{data.price}</span>
                        <span>{data.cost}</span>
                    </InnerLeftItem>
                    <RightItem>
                        {data.provide}
                    </RightItem>
                </DetailsWrapper>
            </TitleWrapper>
        </Wrapper> 
    )
};
