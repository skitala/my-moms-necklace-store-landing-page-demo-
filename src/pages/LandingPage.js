import {
  useRef,
  useEffect,
  useState,
} from "react";
import NavbarLeft from "../components/NavbarLeft";
import NavbarRight from "../components/NavbarRight";
import Info from "../components/Info";
import JewerlyItem from "../components/JewerlyItem";
import IMAGES from "../images";
import {
  Swiper,
  SwiperSlide,
} from "swiper/react";
import "swiper/css";

const LandingPage = () => {
  const [moveRight, setMoveRight] =
    useState(false);
  const [necklaces, setNecklaces] =
    useState([IMAGES]);

  const left = useRef("");
  const right = useRef("");
  const moveBack = useRef("");

  useEffect(() => {
    left.current.style.transform =
      "translateX(0%)";
    right.current.style.transform =
      "translateX(0%)";
    console.log(
      Object.values(necklaces[0])
    );
  }, [left, right]);

  const moveBothways = () => {
    setMoveRight(true);
    right.current.style.transform =
      "translateX(+91%)";
    if (
      moveBack.current.innerText === "<"
    ) {
      setMoveRight(false);
      right.current.style.transform =
        "translateX(0%)";
    }
  };

  return (
    <div className="mainContainer">
      <div
        className="leftSection"
        ref={left}
      >
        <NavbarLeft />
        <Info />
      </div>
      <div
        className="rightSection"
        ref={right}
      >
        <NavbarRight />
        <button
          className="moveBtn"
          onClick={moveBothways}
          ref={moveBack}
        >
          {moveRight ? "<" : ">"}
        </button>
        <div className="catalog">
          <h2 className="catalogLetter">
            C
          </h2>
          <h2 className="catalogLetter">
            A
          </h2>
          <h2 className="catalogLetter">
            T
          </h2>
          <h2 className="catalogLetter">
            A
          </h2>
          <h2 className="catalogLetter">
            L
          </h2>
          <h2 className="catalogLetter">
            O
          </h2>
          <h2 className="catalogLetter">
            G
          </h2>
        </div>
        <Swiper
          loop
          spaceBetween={30}
          slidesPerView={3}
        >
          {Object.values(
            necklaces[0]
          ).map((necklace) => (
            <SwiperSlide className="swiperSlide">
              <JewerlyItem
                necklace={necklace}
                image={IMAGES}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LandingPage;
