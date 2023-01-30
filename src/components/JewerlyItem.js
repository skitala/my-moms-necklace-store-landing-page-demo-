import { useRef } from "react";

const JewerlyItem = ({ necklace }) => {
  const showName = useRef("");
  const showPrice = useRef("");
  const imgCont = useRef("");
  const item = useRef("");

  const onHover = () => {
    // showName.current.style.display =
    //   "block";
    // showPrice.current.style.display =
    //   "block";
    item.current.style.transform =
      "scale(1.2)";
  };
  const onHoverExit = () => {
    // showName.current.style.display =
    //   "none";
    // showPrice.current.style.display =
    //   "none";
    item.current.style.transform =
      "scale(1)";
  };

  return (
    <div
      className="jewerlyItem"
      onMouseEnter={onHover}
      onMouseOut={onHoverExit}
      ref={item}
    >
      <h1>Name:</h1>
      <div
        className="imgCont"
        style={{
          backgroundImage: `url(${necklace})`,
        }}
        ref={imgCont}
      >
        {Image}
      </div>
      <h3
        className="itemName"
        ref={showName}
      >
        Lorem, ipsum dolor.
      </h3>
      <h2
        className="itemPrice"
        ref={showPrice}
      >
        Price: 20$
      </h2>
    </div>
  );
};

export default JewerlyItem;
