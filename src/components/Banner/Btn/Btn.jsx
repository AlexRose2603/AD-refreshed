import { BtnContainer, JoinBtn, LearnMoreBtn } from "./Btn.styled";

import { animateScroll as scroll } from "react-scroll";

const Btn = () => {
  const scrollMore = () => {
    const scrollDistance = window.innerWidth < 768 ? 1700 : 1400;
    scroll.scrollMore(scrollDistance);
  };
  return (
    <>
      <BtnContainer>
        <JoinBtn to="/tariffs">Приєднатися</JoinBtn>
        <LearnMoreBtn onClick={scrollMore}>Детальніше</LearnMoreBtn>
      </BtnContainer>
    </>
  );
};
export default Btn;
