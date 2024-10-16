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
const Premium = ({
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
        <Name> {state.premiumTariff.title}</Name>
        <Line></Line>
        <div>
          {state.premiumTariff.shortAbstractsList.map((benefit) => (
            <BenefitsList key={state.premiumTariff.id}>
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
              name="premium_tariff_months_select"
              id="premium_tariff_months_select"
              value={state.premiumTariff.uiMonth}
              onChange={(e) => handleMonthChanges("premium", e.target.value)}
            >
              {getUniqueMonths(tariffs, "premium").map((option) => (
                <Option key={option} value={option}>
                  {option} місяців
                </Option>
              ))}
            </Select>
            {/* <p>{state.premiumTariff.uiMonth} місяців</p>
            <SlArrowDown
              style={{
                transform: state.premiumTariff.uiMonth
                  ? "rotate(-180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.4s ease",
                marginRight: "10px",
              }}
            /> */}
          </div>
          <Line></Line>
          <div>
            <Icon iconName="icon-Users-Group-Rounded" />
            <Select
              name="premium_tariff_people_select"
              id="premium_tariff_people_select"
              value={state.premiumTariff.uiClientsCount}
              onChange={(e) =>
                handleAmountOfPeopleChanges("premium", e.target.value)
              }
            >
              {getUniquePeopleCount(tariffs, "premium").map((option) => (
                <Option key={option} value={option}>
                  {option} людина
                </Option>
              ))}
            </Select>
            {/* <p>{state.premiumTariff.uiClientsCount} людина</p>
            <SlArrowDown
              style={{
                transform: state.premiumTariff.uiClientsCount
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
          {state.premiumTariff.price}
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
              onSubscribe(state.premiumTariff.id, accessToken);
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

Premium.propTypes = {
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
export default Premium;
