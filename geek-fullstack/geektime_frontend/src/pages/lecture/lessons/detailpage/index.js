import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Head, Content, Background } from "./style";
import Scroll from "../../../../components/scroll/Scroll";
import TabHead from "./head/Head";
import Nav from "./Nav/index";
import { renderRoutes } from "react-router-config";
import { CSSTransition } from "react-transition-group";
import Foot from "./foot/index";

function Page({ route }) {
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    setShowMessage(true);
  }, []);
  return (
    <CSSTransition
      in={showMessage}
      timeout={300}
      classNames="fly"
      unmountOnExit
    >
      <Background>
        {renderRoutes(route.routes)}
        <Head>
          <NavLink to="/lecture/lessons">
            <svg width="42" height="42" style={{ marginLeft: "-2vw" }}>
              <polyline
                points="25, 13 16, 21 25, 29"
                stroke="#ccc"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </NavLink>
          <img src="/asserts/star.png" className="star" />
          <img src="asserts/send.png" />
        </Head>

        <Content>
          <Scroll>
            <Container>
              <TabHead />
              <Nav route={route} />
            </Container>
          </Scroll>
        </Content>
        <Foot />
      </Background>
    </CSSTransition>
  );
}
export default Page;
