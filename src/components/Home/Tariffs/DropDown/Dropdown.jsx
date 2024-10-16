import { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../../../Icon/Icon";
// import Select from "react-select";
import {
  DropdownOption,
  DropdownOptions,
  DropdownToggle,
} from "./Dropdown.styled";

const Dropdown = ({ options, onChange, uiGroup, tariffs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    onChange(value);

    const filteredTariffs = Array.isArray(tariffs)
      ? tariffs.filter(
          (tariff) =>
            tariff.uiGroup.toLowerCase().includes(uiGroup) &&
            tariff.uiMonth === value
        )
      : [];
    const price = filteredTariffs.length > 0 ? filteredTariffs[0].price : 0;

    onChange(value, uiGroup, price);
  };

  return (
    <div>
      <DropdownToggle onClick={handleToggle}>{selectedValue}</DropdownToggle>
      <DropdownOptions isOpen={isOpen}>
        {options.map((option) => (
          <DropdownOption
            key={option}
            value={option}
            onClick={() => handleOptionClick(option)}
          >
            <Icon iconName="icon-Calendar" />
            <p>{option}</p>
          </DropdownOption>
        ))}
      </DropdownOptions>
    </div>
  );
};
export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  onChange: PropTypes.func.isRequired,
  uiGroup: PropTypes.string.isRequired,
  tariffs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      uiGroup: PropTypes.string.isRequired,
      uiMonth: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
