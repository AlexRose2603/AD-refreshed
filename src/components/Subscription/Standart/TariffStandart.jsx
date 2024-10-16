import bannerImg from "../../../assets/images/tariffs/banner.jpg";
import bannerImg2 from "../../../assets/images/tariffs/banner-2x.jpg";
import mobImg from "../../../assets/images/tariffs/mobile-banner.jpg";
import mobImg2 from "../../../assets/images/tariffs/mobile-banner-2x.jpg";
import { Container } from "./../../../pages/HomePage/HomePage.styled";
import { useSelector } from "react-redux";
import Icon from "../../Icon/Icon";
import {
  Block,
  BuyTariffBlock,
  DetailsBlock,
  DetailsInfoList,
  ImgWrapper,
  InfoItem,
  ItemBlock,
  MonthPeople,
  Price,
  SubTitle,
  Title,
} from "./TariffStandart.styled";
// import { SubscribeBtn } from "../../Home/Tariffs/Tariffs.styled";
// import Standart from "../../Home/Tariffs/Standart/Standart";

const TariffStandart = () => {
  const tariffs = useSelector((state) => state.subscription.data);
  const standardTariffs = tariffs.filter(
    (tariff) => tariff.uiGroup === "Standart"
  );
  const sharedDescription =
    standardTariffs.length > 0 ? standardTariffs[0].description : "";

  const getPeopleEnding = (count) => {
    if (count === 1) {
      return "людина";
    } else if (count >= 2 && count <= 4) {
      return "людини";
    } else {
      return "людей";
    }
  };
  return (
    <>
      <ImgWrapper>
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
        <Title>Пакет “Стандарт”</Title>
      </ImgWrapper>
      <Container>
        <Block>
          <DetailsBlock>
            <SubTitle>Деталі пакету</SubTitle>

            {standardTariffs.map((tariff) => (
              <DetailsInfoList key={tariff.id}>
                <InfoItem>
                  <MonthPeople>
                    <ItemBlock>
                      <Icon iconName="icon-Calendar" />
                      <p> {tariff.uiMonth} місяців</p>
                    </ItemBlock>
                    <ItemBlock>
                      <Icon iconName="icon-Users-Group-Rounded" />
                      <p>
                        {tariff.uiClientsCount}{" "}
                        {getPeopleEnding(tariff.uiClientsCount)}
                      </p>
                    </ItemBlock>
                  </MonthPeople>

                  <ItemBlock>
                    <Price>- {tariff.price} грн</Price>
                  </ItemBlock>
                </InfoItem>
              </DetailsInfoList>
            ))}
            <p dangerouslySetInnerHTML={{ __html: sharedDescription }}></p>
          </DetailsBlock>
          <BuyTariffBlock>
            <SubTitle style={{ textAlign: "center" }}>Оформити</SubTitle>
            {/* <Standart
              state={state}
              // tariffs={tariffs}
              handleMonthChanges={handleMonthChanges}
              handleAmountOfPeopleChanges={handleAmountOfPeopleChanges}
              getUniqueMonths={getUniqueMonths}
              getUniquePeopleCount={getUniquePeopleCount}
              onSubscribe={onSubscribe}
              setShowPopUp={setShowPopUp}
              accessToken={accessToken}
            /> */}
            {/* <SubscribeBtn
              type="button"
              // onClick={() => {
              //   if (accessToken) {
              //     onSubscribe(tariff.id, accessToken);
              //   } else {
              //     setShowPopUp(true);
              //   }
              // }}
            >
              Оформити
            </SubscribeBtn> */}
          </BuyTariffBlock>
        </Block>
      </Container>
    </>
  );
};

export default TariffStandart;
