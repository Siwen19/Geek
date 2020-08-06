import React, { useState, useEffect, useRef } from 'react'
import { NavContent, TabBar } from './style'
import { NavLink, useParams, useLocation, useRouteMatch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import Introduction from './introduction/index';
import Catalogue from './category/index';
import Recommend from './recommend/index';
import Comment from './comment/index';

function Nav (props) {
  const { id } = useParams();
  const [state, setState] = useState([<Introduction id={id} key={id} />]);
  console.log(state)
  const handleClick = (str, e) => {
      for (let child of e.target.parentNode.childNodes) {
          child.className = ''
      }
      e.target.className = 'selected';  
      switch (str) {
        case 'intro':
            return setState([<Introduction id={id} key={id}/>]); 
        case 'catalog':
            return setState([<Catalogue id={id} key={id}/>]); 
        case 'recommend': 
            return setState([<Recommend id={id} key={id}/>]); 
        case 'comment': 
            return setState([<Comment id={id} key={id}/>]); 
          default:
            return ;
      }
  }

  const { route } = props
  return (
    <NavContent>
      {renderRoutes(route.routes)}
      <div>
        <NavLink 
        to={`/lecture/lessons/${id}?tab=intro`}  
        onClick={handleClick.bind(this, 'intro')}
        className="selected"
        >
          简介
        </NavLink>
        <NavLink 
        to={`/lecture/lessons/${id}?tab=catalog`}  
        onClick={handleClick.bind(this, 'catalog')}
        >
          目录
          <span><span>试读</span></span>
        </NavLink>
        <NavLink 
        to={`/lecture/lessons/${id}?tab=recommend`}  
        onClick={handleClick.bind(this, 'recommend')}
        >
          推荐
        </NavLink>
        <NavLink 
        to={`/lecture/lessons/${id}?tab=comment`}  
        onClick={handleClick.bind(this, 'comment')}
        >
          精选留言
        </NavLink>
      </div>
      <div>
        {state}
      </div>
    </NavContent>
  )
}

export default Nav
