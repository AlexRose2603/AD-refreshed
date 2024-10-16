import { Container } from "./ShopPage.styled";
import ProductCard from "../../components/Shop/ProductCard";
import { fetchProducts } from "../../redux/shop/operations/operationsStore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const ShopPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (products.loading) {
    return <Loader />;
  }

  if (products.error) {
    return <p>Error loading products</p>;
  }
  return (
    <>
      <Container>
        {products.map(({ id, title, price, imageUrl }) => (
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            image={imageUrl}
          />
        ))}
      </Container>
    </>
  );
};

export default ShopPage;
