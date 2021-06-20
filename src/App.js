import { useTransition, animated } from "react-spring";
import { useState } from "react";
import "./App.css";

const App = () => {
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
    <div className="app">
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
      <div className="container">
        {transition(
          (style, item) =>
            item && <animated.div style={style} className="item" />
        )}
      </div>
    </div>
  );
};

export default App;
