import React, { lazy, Suspense } from 'react';
import BlankLayout from './BlankLayout';
import { Redirect } from 'react-router-dom';      

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const LessonsLayout = lazy(() => import("../pages/lecture/lessons/index"));
const DailyLayout = lazy(() => import("../pages/lecture/daily/index"));
const CampLayout = lazy(() => import("../pages/lecture/camp/index"));
const FindLayout = lazy(() => import("../pages/find/Find"));
const FootLayout = lazy(() => import("../components/foot/Foot"));
const UserLayout = lazy(() => import("../pages/homepage/HomePage"));
const Header = lazy(() => import("../pages/lecture/lessons/header/Header"));
const StudyLayout = lazy(() => import("../pages/study/Study"));
const Account = lazy(() => import("../pages/homepage/account/account"));
const PersonPage = lazy(() => import("../pages/lecture/lessons/detailpage/index"));
const IntroductionLayout = lazy(() => import("../pages/lecture/lessons/detailpage/Nav/introduction/index"));
const RecommendLayout = lazy(() => import("../pages/lecture/lessons/detailpage/Nav/recommend/index"));
const CommentLayout = lazy(() => import("../pages/lecture/lessons/detailpage/Nav/comment/index"));
const CategoryLayout = lazy(() => import("../pages/lecture/lessons/detailpage/Nav/category/index"));
const PaymentTable = lazy(() => import("../pages/order/index"))

export default  [
    {
      component: BlankLayout,
      routes: [
        {
          path: "/",
          component: SuspenseComponent(FootLayout),
          routes: [
              {
                path: "/",
                exact: true,
                render: () => <Redirect to={"/find"} />
              },
              {
                path: "/find",
                component: SuspenseComponent(FindLayout) 
              },
              {  
                path: "/lecture",
                component: SuspenseComponent(Header),
                routes: [
                  {
                    path: "/lecture",
                    exact: true,
                    render: () => <Redirect to={"/lecture/lessons"} />
                  },
                  {
                    path: '/lecture/lessons',
                    component: SuspenseComponent(LessonsLayout),
                    routes: [
                      {
                        path: "/lecture/lessons/:id",
                        component: SuspenseComponent(PersonPage),
                        routes: [
                          {
                            path: '/lecture/lessons/:id?tab=intro',
                            component: SuspenseComponent(IntroductionLayout)
                          }, 
                          {
                            path: '/lecture/lessons/:id?tab=catalog',
                            component: SuspenseComponent(CategoryLayout)
                          },
                          {
                            path: '/lecture/lessons/:id?tab=recommend',
                            component: SuspenseComponent(RecommendLayout)
                          },
                          {
                            path: '/lecture/lessons/:id?tab=comment',
                            component: SuspenseComponent(CommentLayout)
                          }
                        ]
                      },
                      
                    ]
                  },
                  {
                    path: '/lecture/camp',
                    component: SuspenseComponent(CampLayout)
                  },
                  {
                    path: '/lecture/daily',
                    component: SuspenseComponent(DailyLayout)
                  },
                ] 
              },
              {
                path: '/study',
                component: SuspenseComponent(StudyLayout)
              },
              {
                path: '/user',
                component: SuspenseComponent(UserLayout), 
              },
              {
                path: '/payment',
                component: SuspenseComponent(PaymentTable),
              },
              {
                path: '/account',
                component: SuspenseComponent(Account),
              }, 
          ]
        }
      ]
    }, 
]