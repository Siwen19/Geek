import React from 'react';
import BlankLayout from './BlankLayout';
import { Redirect } from 'react-router-dom';
import lessonsLayout from '../pages/lecture/lessons/index';
import dailyLayout from '../pages/lecture/daily/index';
import campLayout from '../pages/lecture/camp/index';
import findLayout from '../pages/find/Find';
import footLayout from '../components/foot/Foot';
import userLayout from '../pages/homepage/HomePage';
import Header from '../pages/lecture/lessons/header/Header';
import studyLayout from '../pages/study/Study';

const Recommend = () => <div>fdfdfdf</div>;
export default  [
    {
      component: BlankLayout,
      routes: [
        {
          path: "/",
          component: footLayout,
          routes: [
              {
                path: "/",
                exact: true,
                render: () => <Redirect to={"/find"} />
              },
              {
                path: "/find",
                component: findLayout
              },
              {  
                path: "/lecture",
                component: Header,
                routes: [
                  {
                    path: "/lecture",
                    exact: true,
                    render: () => <Redirect to={"/lecture/lessons"} />
                  },
                  {
                    path: '/lecture/lessons',
                    component: lessonsLayout
                  },
                  {
                    path: '/lecture/camp',
                    component: campLayout
                  },
                  {
                    path: '/lecture/daily',
                    component: dailyLayout
                  },
                ] 
              },
              {
                path: '/study',
                component: studyLayout
              },
              {
                path: '/user',
                component: userLayout
              }
          ]
        }
      ]
    }
]