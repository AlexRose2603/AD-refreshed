import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Report } from "notiflix/build/notiflix-report-aio";
import { fetchUrl } from "../../redux/tarifs/getUrl/operation";
import { fetchTariffs } from "../../redux/tarifs/operations";
import bannerImg from "../../assets/images/tariffs/banner.jpg";
import bannerImg2 from "../../assets/images/tariffs/banner-2x.jpg";
import mobImg from "../../assets/images/tariffs/mobile-banner.jpg";
import mobImg2 from "../../assets/images/tariffs/mobile-banner-2x.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Container } from "../HomePage/HomePage.styled";
import Icon from "../../components/Icon/Icon";
import {
  BenefitsList,
  DoneIcon,
  Item,
  Line,
  Name,
  Price,
  SubInfoBox,
  SubscribeBtn,
  TariffItem,
} from "../../components/Home/Tariffs/Tariffs.styled";
import {
  Box,
  CloseBtn,
  ListWrapper,
  NotifyText,
  OkayBtn,
  Overlay,
  PaginationStyles,
  PopUp,
  SlideBox,
  TariffList,
  Title,
} from "./TariffsPage.styled";

const TariffsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedTariffId, setSelectedTariffId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const tariffs = useSelector((state) => state.subscription.data);
  // const isLoading = useSelector((state) => state.subscription.isLoading);
  // const error = useSelector((state) => state.subscription.error);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const accessToken = useSelector((state) => state.auth.token.accessToken);
  const accessToken = localStorage.getItem("accessToken");
  // console.log("tarifs page", tariffs);

  const swiper = useSwiper();

  useEffect(() => {
    dispatch(fetchTariffs());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 360 && window.innerWidth <= 1279);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSubscribe = async (tariffId, accessToken) => {
    if (!isLoggedIn) {
      setShowPopUp(true);

      return;
    }

    const selectedTariff = tariffs.find((tariff) => tariff.id === tariffId);
    const index = tariffs.findIndex((tariff) => tariff.id === tariffId);

    if (index !== -1) {
      setSelectedTariffId(tariffId);
    }

    if (!selectedTariff || !accessToken) {
      return;
    }
    try {
      const action = await dispatch(
        fetchUrl({ tariff: selectedTariff, accessToken })
      );
      if (fetchUrl.fulfilled.match(action)) {
        const { url } = action.payload;
        window.open(url, "_blank");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setShowPopUp(false);
  };
  const redirectToRegistration = () => {
    navigate("/registration");
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeModal();
  };

  return (
    <>
      <Box>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${bannerImg} 1x, ${bannerImg2} 2x`}
            alt="ancient statues background"
          />
          <source
            media="(min-width: 360px)"
            srcSet={`${mobImg} 1x, ${mobImg2} 2x`}
            alt="ancient statues background"
          />
          <img src={bannerImg} alt="" />
        </picture>
        <Title>Тарифи</Title>
      </Box>
      <Container>
        <PaginationStyles>
          {!isMobile ? (
            <ListWrapper>
              {tariffs.map((tariff, index) => (
                <TariffList key={tariff.id}>
                  <TariffItem isSpecial={index >= tariffs.length - 2}>
                    <Name> {tariff.title}</Name>
                    <Line></Line>
                    <div>
                      {tariff.shortAbstractsList.map((benefit) => (
                        <BenefitsList key={tariff.id}>
                          <Item>
                            <DoneIcon />
                            <p style={{ marginBottom: "10px" }}>{benefit}</p>
                          </Item>
                        </BenefitsList>
                      ))}
                    </div>
                    <Line></Line>
                    <SubInfoBox>
                      <div>
                        <Icon iconName="icon-Calendar" />
                        <p>{tariff.uiMonth} місяців</p>
                      </div>
                      <div>
                        <Icon
                          iconName="icon-Users-Group-Rounded"
                          width="16px"
                          height="16px"
                          fill="#fe9901"
                        />
                        <p>{tariff.uiClientsCount}</p>
                      </div>
                    </SubInfoBox>
                    <Price>{tariff.price} грн</Price>
                    <SubscribeBtn
                      type="button"
                      onClick={() => {
                        onSubscribe(tariff.id, accessToken);
                      }}
                    >
                      Оформити
                    </SubscribeBtn>
                  </TariffItem>
                </TariffList>
              ))}
            </ListWrapper>
          ) : (
            <SlideBox>
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
                <ListWrapper>
                  {tariffs.map((tariff, index) => (
                    <TariffList key={tariff.id}>
                      <SwiperSlide onClick={() => swiper.slideNext()}>
                        <TariffItem isSpecial={index >= tariffs.length - 2}>
                          <Name> {tariff.title}</Name>
                          <Line></Line>
                          <div></div>
                          <Line></Line>
                          <SubInfoBox>
                            <div>
                              <Icon iconName="icon-Calendar" />
                              <p>{tariff.uiMonth} місяців</p>
                            </div>
                            <div>
                              <Icon
                                iconName="icon-Users-Group-Rounded"
                                width="16px"
                                height="16px"
                                fill="#fe9901"
                              />
                              <p>{tariff.uiClientsCount}</p>
                            </div>
                          </SubInfoBox>
                          <Price>{tariff.price} грн</Price>
                          <SubscribeBtn
                            type="button"
                            onClick={() => onSubscribe(tariff.id, accessToken)}
                          >
                            Оформити
                          </SubscribeBtn>
                        </TariffItem>
                      </SwiperSlide>
                    </TariffList>
                  ))}
                </ListWrapper>

                <div className="swiper-pagination"></div>
              </Swiper>
            </SlideBox>
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
              {/* <SubscribeNotific to="/registration" /> */}
              <OkayBtn onClick={redirectToRegistration}>Okay</OkayBtn>
              <CloseBtn onClick={closeModal}>Cancel</CloseBtn>
            </PopUp>
          </>
        )}
      </Container>
    </>
  );
};

export default TariffsPage;
