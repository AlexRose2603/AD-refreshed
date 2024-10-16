import {
  BenefitItem,
  BenefitsList,
  DoneIcon,
  Item,
  Line,
  Name,
  Option,
  Price,
  Select,
  SubInfoBox,
  SubscribeBtn,
  TariffItem,
} from "../Tariffs.styled";
import Icon from "../../../Icon/Icon";
// import { SlArrowDown } from "react-icons/sl";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const Standart = ({
  state,
  tariffs,
  accessToken,
  handleMonthChanges,
  getUniqueMonths,
  getUniquePeopleCount,
  handleAmountOfPeopleChanges,
  onSubscribe,
  setShowPopUp,
}) => {
  return (
    <>
      <TariffItem>
        <Name> {state.standartTariff.title}</Name>
        <Line></Line>
        <div>
          {state.standartTariff.shortAbstractsList.map((benefit) => (
            <BenefitsList key={state.standartTariff.id}>
              <Item>
                <DoneIcon />
                <BenefitItem>{benefit}</BenefitItem>
              </Item>
            </BenefitsList>
          ))}
        </div>

        <Line></Line>
        <SubInfoBox>
          <div>
            <Icon iconName="icon-Calendar" />
            <Select
              name="standart_tariff_months_select"
              id="standart_tariff_months_select"
              value={state.standartTariff.uiMonth}
              onChange={(e) => handleMonthChanges("standart", e.target.value)}
            >
              {getUniqueMonths(tariffs, "standart").map((option) => (
                <Option key={option} value={option}>
                  {option} місяців
                </Option>
              ))}
            </Select>
          </div>
          <Line></Line>

          <div>
            <Icon iconName="icon-Users-Group-Rounded" />
            <Select
              name="standart_tariff_people_select"
              id="standart_tariff_people_select"
              value={state.standartTariff.uiClientsCount}
              onChange={(e) =>
                handleAmountOfPeopleChanges("standart", e.target.value)
              }
            >
              {getUniquePeopleCount(tariffs, "standart").map((option) => (
                <Option key={option} value={option}>
                  {option} людина
                </Option>
              ))}
            </Select>
            {/* <p>{state.standartTariff.uiClientsCount} людина</p>
            <SlArrowDown
              style={{
                transform: state.standartTariff.uiClientsCount
                  ? "rotate(-180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.4s ease",
                marginRight: "10px",
              }}
            /> */}
          </div>
          <Line></Line>
        </SubInfoBox>
        <Price>
          {state.standartTariff.price}
          грн
        </Price>
        <Line></Line>
        <div>
          <Link to="/tariff-standart">Детальніше</Link>
        </div>

        <SubscribeBtn
          type="button"
          onClick={() => {
            if (accessToken) {
              onSubscribe(state.standartTariff.id, accessToken);
            } else {
              setShowPopUp(true);
            }
          }}
        >
          Оформити
        </SubscribeBtn>
      </TariffItem>
    </>
  );
};

Standart.propTypes = {
  state: PropTypes.object.isRequired,
  tariffs: PropTypes.array.isRequired,
  accessToken: PropTypes.string.isRequired,
  handleMonthChanges: PropTypes.func.isRequired,
  getUniqueMonths: PropTypes.func.isRequired,
  getUniquePeopleCount: PropTypes.func.isRequired,
  handleAmountOfPeopleChanges: PropTypes.func.isRequired,
  onSubscribe: PropTypes.func.isRequired,
  setShowPopUp: PropTypes.func.isRequired,
};

export default Standart;
