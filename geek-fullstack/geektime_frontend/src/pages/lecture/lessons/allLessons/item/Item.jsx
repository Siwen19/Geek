import React, { useState } from 'react';
import "./Item.style.js";
import {
    Wrapper, ImageWrapper, TitleWrapper, TeacherWrapper, LessonsWrapper,
    DetailsWrapper, InnerLeftItem, RightItem
} from './Item.style';
import { NavLink, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function Item(props) {
    const { data, path } = props;
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
                        <Link id={data.id} to={`/lecture/lessons/${data.id}`} style={{ color: "#fa8919" }}>
                            {data.provide}
                        </Link>
                    </RightItem>
                </DetailsWrapper>
            </TitleWrapper>
        </Wrapper>
    )
};
