import { Switch, Route, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";

import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";
import Page3 from "../pages/Page3";

const Routes = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: {
      opacity: 0,
      position: "absolute",
      transform: "translateY(50px)",
    },
    enter: {
      opacity: 1,
      position: "absolute",
      transform: "translateY(0px)",
    },
    leave: {
      opacity: 0,
      position: "absolute",
      transform: "translateY(50px)",
    },
  });
  return transitions((style, item) => (
    <animated.div style={style} className="app">
      <Switch location={item}>
        <Route path="/" exact component={Page1} />
        <Route path="/Page2" component={Page2} />
        <Route path="/Page3" component={Page3} />
      </Switch>
    </animated.div>
  ));
};

export default Routes;
