import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/reducers/favouritesSlice";
import { Report } from "notiflix/build/notiflix-report-aio";
import AddToFavourite from "./FavIcon/FavIcon";
import {
  BookCover,
  BookTitle,
  Box,
  MoreDetailsBtn,
  Price,
  Wrapper,
} from "./ProductCard.styled";

const ProductCard = ({ id, title, image, price }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isFavourite = favourites.some((product) => product.id === id);

  const getLoggedIn = () => {
    if (!isLoggedIn) {
      Report.info(
        "Упс",
        "Потрібно залогінитись або зареєструватись щоб додати товар до обраного"
      );
      return false;
    }
    return true;
  };

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites(id));
    } else {
      dispatch(addToFavourites({ id, title, image, price }));
    }
  };
  const handleToggleFavourite = () => {
    if (getLoggedIn()) {
      dispatch(toggleFavourite(id));
    }
  };
  return (
    <>
      <Wrapper>
        <BookCover src={image} alt={title} />
        <Box>
          <BookTitle>{title}</BookTitle>
          <AddToFavourite
            onClick={() => handleToggleFavourite()}
            isFavourite={isFavourite}
          />
        </Box>
        <Price>{price}</Price>
        <MoreDetailsBtn to={`/shop/${id}`}>Детальніше</MoreDetailsBtn>
      </Wrapper>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
