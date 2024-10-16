import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../../components/Shop/ProductCard";
import { setFavouritesAction } from "../../redux/actions/actions";
import { FavList } from "./Favourite.styled";
import { Container } from "../ShopPage/ShopPage.styled";

const Favourite = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  useEffect(() => {
    const favouritesFromLocalStorage =
      JSON.parse(localStorage.getItem("favourites")) || [];
    dispatch(setFavouritesAction(favouritesFromLocalStorage));
  }, [dispatch]);
  return (
    <>
      <Container>
        {!favourites || favourites.length === 0 ? (
          <div style={{ color: "black", margin: "0 auto" }}>
            Ви ще не додали жоден товар
          </div>
        ) : (
          <FavList>
            {favourites.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              );
            })}
          </FavList>
        )}
      </Container>
    </>
  );
};

export default Favourite;
