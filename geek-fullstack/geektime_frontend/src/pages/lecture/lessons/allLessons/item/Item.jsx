import React, { useState } from 'react';
import "./Item.style.js";
import {
    Wrapper, ImageWrapper, TitleWrapper, TeacherWrapper, LessonsWrapper,
    DetailsWrapper, InnerLeftItem, RightItem
} from './Item.style';
import { NavLink } from 'react-router-dom'; 
import  LazyLoad from 'react-lazyload';

export default function Item(props) {
    const { data } = props;  
    return (
        <NavLink id={data.id} to={`/lecture/lessons/${data.id}`} style={{ color: "#fa8919" }}>
        <Wrapper>
                <LazyLoad 
                placeholder={<img width="100%" height="100%" src="" alt="music" />}>
            <ImageWrapper>
                <img src={data.author.avatar} alt="" />
            </ImageWrapper>
                </LazyLoad>
            <TitleWrapper>
                <h3>{data.title}</h3>
                <TeacherWrapper>
                    <span>{data.author.name}</span>
                    <span>{data.author.intro}</span>
                </TeacherWrapper>
                <LessonsWrapper>
                    {data.unit} | {data.extra.sub.count}人已学习
                </LessonsWrapper>
                <DetailsWrapper>
                    <InnerLeftItem>
                        <span>
                            <span>新人首单</span>
                        </span>
                        <span>¥{data.extra.first_promo.price / 100}</span>
                        <span>¥{data.price.market / 100}</span>
                    </InnerLeftItem>
                    <RightItem> 
                            {data.type === 'c1' ? "试读":"试看"} 
                    </RightItem>
                </DetailsWrapper>
            </TitleWrapper>
        </Wrapper>
        </NavLink>
    )
};
