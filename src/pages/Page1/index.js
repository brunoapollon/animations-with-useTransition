import { useTransition, animated } from "react-spring";
import { useState } from "react";
import { Link } from "react-router-dom";
const Page1 = () => {
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
    <animated.div>
      <h1>Page 1</h1>
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
      <Link to="Page2">
        <button>Page 2</button>
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

export default Page1;
