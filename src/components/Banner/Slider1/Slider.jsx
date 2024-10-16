import Btn from "../Btn/Btn";
import { Text, Title, Wrapper } from "./Slider.styled";

const Slider = () => {
  return (
    <>
      <Wrapper>
        <Title>Захист прав водія - наша першочергова задача!</Title>
        <Text>
          Ми - надійний партнер з будь-яких юридичних питань. Це означає, що вам
          не потрібно шукати підрядників для вирішення різнопланових проблем -
          все можна отримати в одному місці.{" "}
        </Text>
        <Btn />
      </Wrapper>
    </>
  );
};

export default Slider;
