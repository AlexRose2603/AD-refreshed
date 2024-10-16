import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTariffs } from "../../../redux/tarifs/operations";
import { fetchUrl } from "../../../redux/tarifs/getUrl/operation";
import Standart from "./Standart/Standart";
import Premium from "./Standart/Premium";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  SectionName,
  SubTitle,
  TarifBox,
  TarifDescription,
  TariffList,
  TariffsWrapper,
} from "./Tariffs.styled";
import { Container, Title } from "../../../pages/HomePage/HomePage.styled";

import {
  CloseBtn,
  NotifyText,
  OkayBtn,
  Overlay,
  PaginationStyles,
  PopUp,
} from "../../../pages/TariffsPage/TariffsPage.styled";

const Tariffs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPopUp, setShowPopUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tariffs = useSelector((state) => state.subscription.data);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const accessToken = localStorage.getItem("accessToken");
  const swiper = useSwiper();

  const [state, setState] = useState({
    standartTariff: null,
    premiumTariff: null,
  });

  useEffect(() => {
    dispatch(fetchTariffs());
  }, [dispatch]);

  useEffect(() => {
    const standartTariff = tariffs.find(
      (tariff) => tariff.uiGroup.toLowerCase() === "standart"
    );
    const premiumTariff = tariffs.find(
      (tariff) => tariff.uiGroup.toLowerCase() === "premium"
    );

    setState((state) => ({
      ...state,
      standartTariff: standartTariff,
      premiumTariff: premiumTariff,
    }));
  }, [tariffs]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth >= 360 && window.innerWidth <= 1279);
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const handleMonthChanges = (side, value) => {
    const currentTariff =
      side === "standart" ? state.standartTariff : state.premiumTariff;
    const newTariff = tariffs.find(
      (x) =>
        x.uiMonth === +value &&
        x.uiClientsCount === currentTariff.uiClientsCount
    );
    if (!newTariff) {
      return;
    }
    if (side === "standart") {
      setState((state) => ({
        ...state,
        standartTariff: newTariff,
      }));
    } else {
      setState((state) => ({
        ...state,
        premiumTariff: newTariff,
      }));
    }
  };

  const handleAmountOfPeopleChanges = (side, value) => {
    const currentTariff =
      side === "standart" ? state.standartTariff : state.premiumTariff;
    const newTariff = tariffs.find(
      (x) =>
        x.uiGroup.toLowerCase() === side &&
        x.uiMonth === currentTariff.uiMonth &&
        x.uiClientsCount === +value
    );
    console.log("value", value);
    if (!newTariff) {
      return;
    }
    if (side === "standart") {
      setState((state) => ({
        ...state,
        standartTariff: newTariff,
      }));
    } else {
      setState((state) => ({
        ...state,
        premiumTariff: newTariff,
      }));
    }
  };

  const getUniqueMonths = (tariffs, tariffType) => {
    const uniqueMonths = new Set();
    tariffs
      .filter(
        (tariff) => tariff.uiGroup.toLowerCase() === tariffType.toLowerCase()
      )
      .forEach((tariff) => uniqueMonths.add(tariff.uiMonth));
    return Array.from(uniqueMonths);
  };

  const getUniquePeopleCount = (tariffs, tariffType) => {
    const uniquePeopleCount = new Set();
    tariffs
      .filter(
        (tariff) => tariff.uiGroup.toLowerCase() === tariffType.toLowerCase()
      )
      .forEach((tariff) => uniquePeopleCount.add(tariff.uiClientsCount));
    return Array.from(uniquePeopleCount);
  };

  const closeModal = () => {
    setShowPopUp(false);
  };

  const redirectToRegistration = () => {
    navigate("/registration");
    closeModal();
  };

  const onSubscribe = async (tariffId, accessToken) => {
    if (!isLoggedIn) {
      setShowPopUp(true);
      return;
    }

    try {
      const action = await dispatch(
        fetchUrl({ tariff: { id: tariffId }, accessToken })
      );
      if (fetchUrl.fulfilled.match(action)) {
        const { url } = action.payload;
        window.open(url, "_blank");
      }
    } catch (error) {
      console.error("Error during subscription:", error);
    }
  };

  return (
    <>
      <Container>
        <TarifBox>
          <SectionName>
            <Title>Що саме ми пропонуємо?</Title>
            <SubTitle>Переваги та бонуси тарифних пакетів</SubTitle>
          </SectionName>

          <TarifDescription>
            <p>
              Обираючи нашу юридичну фірму для юридичного захисту водія, ви
              отримуєте надійного партнера на дорозі та численні переваги різних
              тарифних планів на підписку. З нами ви не тільки отримуєте
              юридичний захист на дорозі, але й мир спокійний під час водіння.{" "}
            </p>
            <p>
              Оберіть найкращий тарифний план для ваших потреб та переконайтеся
              в безпеці на дорозі. Ми доступні цілодобово для допомоги в
              найважливіших моментах. Ви можете вибрати тарифний план, який
              відповідає вашим потребам та бюджету.
            </p>
          </TarifDescription>
        </TarifBox>

        <PaginationStyles>
          {!isMobile ? (
            <TariffsWrapper>
              {state.standartTariff && (
                <TariffList key={state.standartTariff.id}>
                  <Standart
                    state={state}
                    tariffs={tariffs}
                    handleMonthChanges={handleMonthChanges}
                    handleAmountOfPeopleChanges={handleAmountOfPeopleChanges}
                    getUniqueMonths={getUniqueMonths}
                    getUniquePeopleCount={getUniquePeopleCount}
                    onSubscribe={onSubscribe}
                    setShowPopUp={setShowPopUp}
                    accessToken={accessToken}
                  />
                </TariffList>
              )}
              {state.premiumTariff && (
                <TariffList key={state.premiumTariff.id}>
                  <Premium
                    state={state}
                    tariffs={tariffs}
                    handleMonthChanges={handleMonthChanges}
                    handleAmountOfPeopleChanges={handleAmountOfPeopleChanges}
                    getUniqueMonths={getUniqueMonths}
                    getUniquePeopleCount={getUniquePeopleCount}
                    onSubscribe={onSubscribe}
                    setShowPopUp={setShowPopUp}
                    accessToken={accessToken}
                  />
                </TariffList>
              )}
            </TariffsWrapper>
          ) : (
            <Swiper
              className="swiper-container"
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}"></span>`;
                },
              }}
            >
              <TariffsWrapper>
                {state.standartTariff && (
                  <TariffList key={state.standartTariff.id}>
                    <SwiperSlide onClick={() => swiper.slideNext()}>
                      <Standart
                        state={state}
                        tariffs={tariffs}
                        handleMonthChanges={handleMonthChanges}
                        handleAmountOfPeopleChanges={
                          handleAmountOfPeopleChanges
                        }
                        getUniqueMonths={getUniqueMonths}
                        getUniquePeopleCount={getUniquePeopleCount}
                        onSubscribe={onSubscribe}
                        setShowPopUp={setShowPopUp}
                        accessToken={accessToken}
                      />
                    </SwiperSlide>
                  </TariffList>
                )}
                {state.premiumTariff && (
                  <TariffList key={state.premiumTariff.id}>
                    <SwiperSlide onClick={() => swiper.slideNext()}>
                      <Premium
                        state={state}
                        tariffs={tariffs}
                        handleMonthChanges={handleMonthChanges}
                        handleAmountOfPeopleChanges={
                          handleAmountOfPeopleChanges
                        }
                        getUniqueMonths={getUniqueMonths}
                        getUniquePeopleCount={getUniquePeopleCount}
                        onSubscribe={onSubscribe}
                        setShowPopUp={setShowPopUp}
                        accessToken={accessToken}
                      />
                    </SwiperSlide>
                  </TariffList>
                )}
              </TariffsWrapper>
              <div className="swiper-pagination"></div>
            </Swiper>
          )}
        </PaginationStyles>

        {showPopUp && (
          <>
            <Overlay className="visible" onClick={closeModal}></Overlay>
            <PopUp className="visible">
              <NotifyText>
                Потрібно авторизуватись або зареєструватись щоб оформити
                підписку
              </NotifyText>
              <OkayBtn onClick={redirectToRegistration}>Okay</OkayBtn>
              <CloseBtn onClick={closeModal}>Cancel</CloseBtn>
            </PopUp>
          </>
        )}
      </Container>
    </>
  );
};

export default Tariffs;
