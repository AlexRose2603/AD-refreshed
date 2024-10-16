import PropTypes from "prop-types";

import { EmptyHeart, FilledHeart } from "./FavIcon.styled";

const AddToFavourite = ({ isFavourite, onClick }) => {
  return isFavourite ? (
    <FilledHeart onClick={onClick} />
  ) : (
    <EmptyHeart onClick={onClick} />
  );
};
AddToFavourite.propTypes = {
  onClick: PropTypes.func.isRequired,
  isFavourite: PropTypes.bool.isRequired,
};

export default AddToFavourite;
