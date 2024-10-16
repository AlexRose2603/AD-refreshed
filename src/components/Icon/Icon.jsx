import PropTypes from "prop-types";
import icons from "../../assets/icons.svg";
import { useEffect, useState } from "react";

const Icon = ({ iconName, width, height, stroke, fill }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let dynamicWidth, dynamicHeight;

  if (iconName === "icon-Calendar" || iconName === "icon-Users-Group-Rounded") {
    dynamicWidth = "20px";
    dynamicHeight = "20px";
  } else {
    dynamicWidth =
      windowWidth >= 1920
        ? "40px"
        : windowWidth >= 1280 && windowWidth < 1920
        ? "40px"
        : windowWidth >= 768 && windowWidth < 1280
        ? "35px"
        : windowWidth >= 360 && windowWidth < 768
        ? "35px"
        : "40px";

    dynamicHeight =
      windowWidth >= 1920
        ? "40px"
        : windowWidth >= 1280 && windowWidth < 1920
        ? "40px"
        : windowWidth >= 768 && windowWidth < 1280
        ? "35px"
        : windowWidth >= 360 && windowWidth < 768
        ? "35px"
        : "40px";
  }

  // const dynamicWidth =
  //   windowWidth >= 1920
  //     ? "40px"
  //     : windowWidth >= 1280 && windowWidth < 1920
  //     ? "30px"
  //     : windowWidth >= 768 && windowWidth < 1280
  //     ? "25px"
  //     : windowWidth >= 360 && windowWidth < 768
  //     ? "40px"
  //     : "40px";

  // const dynamicHeight =
  //   windowWidth >= 1920
  //     ? "40px"
  //     : windowWidth >= 1280 && windowWidth < 1920
  //     ? "30px"
  //     : windowWidth >= 768 && windowWidth < 1280
  //     ? "25px"
  //     : windowWidth >= 360 && windowWidth < 768
  //     ? "40px"
  //     : "40px";

  return (
    <svg
      width={dynamicWidth || width || "40px"}
      height={dynamicHeight || height || "40px"}
    >
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </svg>
  );
};

Icon.propTypes = {
  iconName: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  stroke: PropTypes.string,
  fill: PropTypes.string,
};

export default Icon;
