import LogoNavigation from "../LogoNavigation/LogoNavigation";
import PropTypes from "prop-types";

const Header = ({ accountType }) => {
  return (
    <>
      <LogoNavigation accountType={accountType} />
    </>
  );
};

export default Header;

Header.propTypes = {
  accountType: PropTypes.string.isRequired,
};
