# react hooks+redux 仿极客时间打造逼真webApp
移动端的chrome浏览器效果更佳 : )

总体效果：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/05512cb70a1c42a0842181065f353b2a~tplv-k3u1fbpfcp-zoom-1.image)

打开方式：

1 将项目 clone 下来 
```
$ https://github.com/Siwen19/Geek.git
$ cd geektime-frontend
$ npm install
```
2 运行 

打开后端提供的数据
```
$ cd geektime-backend 
$ node index.js 
```
打开前端
```
$ cd geektime-frontend 
$ npm start
```
现在就在本地的3000端口访问了，其中后端提供的数据在8080端口

项目介绍:

说明: 本项目参考极客时间安卓端app界面开发，在基础UI的构建中受到了神三元项目的启发，在这个过程也学到了不少设计经验。

该项目的功能并没全部完善，不过基础的框架和部分功能已全部实现 

## 功能介绍
#### 1. 路由部分

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8250c1a146e640bbbb7d699e3717edfe~tplv-k3u1fbpfcp-zoom-1.image)

空中切入切出效果，另外还有随着滑动会产生和标题跑马灯效果。 在歌单中歌曲数量过多的情况下，做了分页处理，随着滚动不断进行上拉加载，防止大量DOM加载导致的页面卡顿

#### 2. 学习路径部分

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fdb116236f64b918fa7bef0d9c7ed0d~tplv-k3u1fbpfcp-zoom-1.image)

#### 3. 课程列表部分

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3949266271544da08d67fa8de9a21a93~tplv-k3u1fbpfcp-zoom-1.image)


这里做了异步加载的处理，上拉到底进行新数据的获取，下拉则进行数据的重新加载

课程详情：

![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d239905b79f84ada9700e2ec89886b95~tplv-k3u1fbpfcp-zoom-1.image)

这里做了空中切入效果，并且增加了下订单，购买课程功能

## 项目部分模块分享
### 1、利用better-scroll打造超级好用的scroll基础组件

```js
import React, { forwardRef, useState,useEffect, useRef, useImperativeHandle } from "react"
import PropTypes from "prop-types"
import BScroll from "better-scroll"
import styled from 'styled-components';
import { debounce } from "../../api/utils";

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Scroll = forwardRef((props, ref) => {
  const [bScroll, setBScroll] = useState();

  const scrollContaninerRef = useRef();

  const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;

  const { pullUp, pullDown, onScroll } = props;

  useEffect(() => {
    if(bScroll) return;
    const scroll = new BScroll(scrollContaninerRef.current, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce:{
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll(scroll);
    if(pullUp) {
      scroll.on('scrollEnd', () => {
        //判断是否滑动到了底部
        if(scroll.y <= scroll.maxScrollY + 100){
          pullUp();
        }
      });
    }
    if(pullDown) {
      scroll.on('touchEnd', (pos) => {
        //判断用户的下拉动作
        if(pos.y > 50) {
          debounce(pullDown, 0)();
        }
      });
    }

    if(onScroll) {
      scroll.on('scroll', (scroll) => {
        onScroll(scroll);
      })
    }

    if(refresh) {
      scroll.refresh();
    }
    return () => {
      scroll.off('scroll');
      setBScroll(null);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if(refresh && bScroll){
      bScroll.refresh();
    }
  })

  useImperativeHandle(ref, () => ({
    refresh() {
      if(bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    }
  }));

  const PullUpdisplayStyle = pullUpLoading ? { display: "" } : { display: "none" };
  const PullDowndisplayStyle = pullDownLoading ? { display: "" } : { display: "none" };
  return (
    <ScrollContainer ref={scrollContaninerRef}>
      {props.children}
      {/* 滑到底部加载动画 */}
      <PullUpLoading style={ PullUpdisplayStyle }></PullUpLoading>
      {/* 顶部下拉刷新动画 */}
      <PullDownLoading style={ PullDowndisplayStyle }></PullDownLoading>
    </ScrollContainer>
  );
})

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: () => {},
  pullDown: () => {},
  bounceTop: true,
  bounceBottom: true
};

Scroll.propTypes = {
  direction: PropTypes.oneOf(['vertical', 'horizental']),
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool,//是否支持向上吸顶
  bounceBottom: PropTypes.bool//是否支持向上吸顶
};

export default React.memo(Scroll);
```

### 2、富有动感的loading组件
```js
import React from 'react';
import styled, {keyframes} from 'styled-components';
import style from '../../assets/global-style'

const dance = keyframes`
    0%, 40%, 100%{
      transform: scaleY(0.4);
      transform-origin: center 100%;
    }
    20%{
      transform: scaleY(1);
    }
`
const Loading = styled.div`
    height: 10px;
    width: 100%;
    margin: auto;
    text-align: center;
    font-size: 10px;
    >div{
      display: inline-block;
      background-color: ${style["theme-color"]};
      height: 100%;
      width: 1px;
      margin-right:2px;
      animation: ${dance} 1s infinite;
    }
    >div:nth-child(2) {
      animation-delay: -0.4s;
    }
    >div:nth-child(3) {
      animation-delay: -0.6s;
    }
    >div:nth-child(4) {
      animation-delay: -0.5s;
    }
    >div:nth-child(5) {
      animation-delay: -0.2s;
    } 
`

function LoadingV2() {
  return (
    <Loading>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span>拼命加载中...</span>
    </Loading>
  );
}
 
export default LoadingV2;
```

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5a3d8a85136946f5af1d03a22aee3b50~tplv-k3u1fbpfcp-zoom-1.image)

### 3、模块懒加载及代码分割(CodeSpliting)
react官方已经提供了相应的方案, 用react自带的lazy和Suspense即可完成。 操作如下:
```js
import React, {lazy, Suspense} from 'react';
const HomeComponent = lazy(() => import("../application/Home/"));
const Home = (props) => {
  return (
    <Suspense fallback={null}>
      <HomeComponent {...props}></HomeComponent>
    </Suspense>
  )
};
......
export default [
  {
    path: "/",
    component: Home,
    routes: [
      {
        path: "/",
        exact: true,
        render:  ()=> (
          <Redirect to={"/recommend"}/>
        )
      },
      {
        path: "/recommend/",
        extra: true,
        key: 'home',
        component: Recommend,
        routes:[{
          path: '/recommend/:id',
          component: Album,
        }]
      }
      ......
    ]
  },

];
```

#### 未来规划和展望

目前这个项目的核心已经完成，但是还是有很多扩展的余地。关于未来的规划，我是这么安排的:

- 完成搜索、学习历史功能
- 完成登录功能和课程查阅
- 实现MV模块
- 实现各模块详情内容

还要补充的内容有很多很多...！