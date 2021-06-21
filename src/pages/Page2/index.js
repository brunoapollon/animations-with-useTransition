import { useTransition, animated } from "react-spring";
import { Link } from "react-router-dom";
import { useState } from "react";
const Page2 = () => {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });
  return (
    <animated.div className="app">
      <h1>Page 2</h1>
      <button
        onClick={() => {
          setItems((e) =>
            e.length
              ? []
              : [
                  { y: -100, delay: 200 },
                  { y: -50, delay: 400 },
                  { y: 0, delay: 600 },
                ]
          );
        }}
      >
        animation
      </button>
      <Link to="Page3">
        <button>Page 3</button>
      </Link>
      <div className="container">
        {transition(
          (style, item) =>
            item && <animated.div style={style} className="item" />
        )}
      </div>
    </animated.div>
  );
};

export default Page2;
