import { useState } from "react";
import {
  Answer,
  Arrow,
  BtnFaq,
  BtnItem,
  BtnList,
  Container,
  FaqBox,
  Item,
  Line,
  Question,
  QuestionArrow,
  QuestionList,
  Title,
} from "./Faq.styled";

const activeButtonStyle = {
  backgroundColor: "#FE9901",
};
const Faq = () => {
  const faqData = [
    {
      id: 1,
      category: "Про послуги",
      questions: [
        "В яких областях Ви працюєте?",
        "Якщо мене зупинили працівники поліції чи ТЦК та СП, як діяти?",
        "Чи буде присутній адвокат на судовому засіданні?",
        "Куди потрібно телефонувати, якщо потрібна юридична консультація?",
        "Що входить в пакет документів?",
        "Якщо постанова винесена до вступу до Клубу, вона оскаржуєтеся за додаткову плату?",
      ],
      answers: [
        "Ми працюємо по всій території України в дистанційному форматі.",
        "Ви можете відразу телефонувати на номер гарячої лінії, де юристи Клубу нададуть Вам грунтовну консультацію з алгоритмом подальших дій вирішення Вашої ситуації.",
        "Пакетом Стандарт та Сімейний стандарт НЕ передбачено присутність адвоката на судовому засіданні. Дана послуга передбачається Premium пакетом, а саме участь адвоката під час розгляду справи в режимі відеоконференції.",
        "Після вступу до Клубу Ви отримуєте повідомлення з номером гарячої лінії Клубу. Також номер гарячої лінії Клубу буде зображений на номерній картці учасника, яку ми відправляємо в пакеті документів.",
        "В пакет документів входить: монографія (книжечка) розроблена Антоном і Дімою «Як поводитися якщо зупиняє поліції чи ТЦК та СП», в якій прописаний порядок дій у момент зупинки; номерна картка учасника Клубу; дві наліпки на авто (внутрішня, зовнішня); ароматизатор в авто; наліпка на мототранспорт (за потреби).",
        "Оскарження постанови, винесеної до вступу в Клуб, оплачується додатково (вартість оплати послуг за оскарження постанови обговорюється з юристом щодо кожного випадку індивідуально після аналізу надісланих матеріалів).",
      ],
    },
    {
      id: 2,
      category: "Про оплату",
      questions: [
        "Etiam feugiat eros mauris, sed tempus turpis auctor in?",
        "Etiam feugiat eros mauris, sed tempus turpis auctor in?",
        "Etiam feugiat eros mauris, sed tempus turpis auctor in?",
        "Etiam feugiat eros mauris, sed tempus turpis auctor in?",
        "Etiam feugiat eros mauris, sed tempus turpis auctor in?",
        "Etiam feugiat eros mauris, sed tempus turpis auctor in?",
      ],
      answers: [
        "Fusce lorem turpis, maximus nec mauris sit amet. Aliquam fringilla erat id odio ultrices, blandit vestibulum justo ullamcorper.",
        "Vestibulum quis consectetur urna, sed dictum nisl. Phasellus sapien leo, rhoncus a felis vel, efficitur pharetra dolor. In massa tortor, malesuada sed ullamcorper non, molestie varius sapien.",
        "Fusce lorem turpis, maximus nec mauris sit amet. Aliquam fringilla erat id odio ultrices, blandit vestibulum justo ullamcorper.",
        "Vestibulum quis consectetur urna, sed dictum nisl. Phasellus sapien leo, rhoncus a felis vel, efficitur pharetra dolor. In massa tortor, malesuada sed ullamcorper non, molestie varius sapien.",
        "Fusce lorem turpis, maximus nec mauris sit amet. Aliquam fringilla erat id odio ultrices, blandit vestibulum justo ullamcorper.",
        "Vestibulum quis consectetur urna, sed dictum nisl. Phasellus sapien leo, rhoncus a felis vel, efficitur pharetra dolor. In massa tortor, malesuada sed ullamcorper non, molestie varius sapien.",
      ],
    },
    {
      id: 3,
      category: "Про тарифи",
      questions: [
        "Чим відрізняється пакет Стандарт від Premium пакету?",
        "Чи можна підключити друга?",
        "Хто може бути другим учасником пакету Сімейний стандарт?",
        "In risus libero, aliquet a ante sit amet, dignissim efficitur velit?",
      ],
      answers: [
        "Головна відмінність в тому, що Premium пакет передбачає послугу «повний документальний супровід справи БЕЗ участі Клієнта (підготовка та подання документів до суду), також здійснення контролю за процесом розгляду справи». В пакеті Стандарт передбачено подання клієнтом пакету документів, підготовленого юристами Клубу, САМОСТІЙНО.",
        "Так, Ви маєте можливість долучити до спільноти Клубу своїх друзів, родичів та знайомих, придбавши подарунковий сертифікат.",
        "Будь-яка особа (дружина, друг, колега і т.д.).",
        "Vestibulum quis consectetur urna, sed dictum nisl. Phasellus sapien leo, rhoncus a felis vel, efficitur pharetra dolor. In massa tortor, malesuada sed ullamcorper non, molestie varius sapien.",
      ],
    },
  ];
  const [activeButton, setActiveButton] = useState(faqData[0].category);
  const [accordionState, setAccordionState] = useState(
    faqData.map(() => false)
  );

  const toggleAccordion = (index) => {
    const updatedStates = [...accordionState];
    updatedStates[index] = !updatedStates[index];
    setAccordionState(updatedStates);
  };

  const handleButtonClick = (category) => {
    setActiveButton(category);
  };
  return (
    <>
      <Container>
        <Title>Часті запитання</Title>
        <FaqBox>
          <BtnList>
            {faqData.map((item) => (
              <BtnItem key={item.id}>
                <BtnFaq
                  type="button"
                  style={
                    activeButton === item.category ? activeButtonStyle : {}
                  }
                  onClick={() => handleButtonClick(item.category)}
                >
                  {" "}
                  {item.category}
                </BtnFaq>
              </BtnItem>
            ))}
          </BtnList>

          <QuestionList>
            {faqData.map((item) =>
              activeButton === item.category
                ? item.questions.map((question, questionIndex) => (
                    <Item key={questionIndex}>
                      <QuestionArrow>
                        <Question
                          onClick={() => toggleAccordion(questionIndex)}
                        >
                          {question}
                        </Question>
                        <Arrow
                          onClick={() => toggleAccordion(questionIndex)}
                          isOpen={accordionState[questionIndex]}
                          style={{
                            transform: accordionState[questionIndex]
                              ? "rotate(-180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.4s ease",
                            marginRight: "10px",
                          }}
                        />
                      </QuestionArrow>

                      <Answer
                        style={{
                          display: accordionState[questionIndex]
                            ? "block"
                            : "none",
                        }}
                      >
                        {item.answers[questionIndex]}
                      </Answer>
                      <Line></Line>
                    </Item>
                  ))
                : null
            )}
          </QuestionList>
        </FaqBox>
      </Container>
    </>
  );
};
export default Faq;
