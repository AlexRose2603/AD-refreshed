import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { onRemoveFromCart } from "../../utils/onRemoveFromCart";
import { useEffect, useState } from "react";
import { updateProductQuantity } from "../../redux/cart/reducers/cartSlice";
import {
  CounterCart,
  ProductImg,
  ProductName,
  ProductPrice,
  TotalPrice,
  Trash,
  Wrapper,
} from "./CartPageItem.styled";

const CartPageItem = ({ id, image, name, price }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const cartList = useSelector((state) => state.shoppingList.shoppingList);

  useEffect(() => {
    const existingProduct = cartList.find((product) => product.id === id);
    if (existingProduct) {
      setQuantity(existingProduct.quantity);
    }
  }, [cartList, id]);

  //don't change this function!
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    dispatch(updateProductQuantity({ productId: id, quantity: newQuantity }));
  };

  const currentProduct = cartList.find((product) => product.id === id);
  const currentProductPrice = currentProduct ? currentProduct.price : price;
  const currentProductQuantity = currentProduct
    ? currentProduct.quantity
    : quantity;
  const currentProductTotalPrice =
    parseFloat(currentProductPrice) * currentProductQuantity;
  console.log("currentProductTotalPrice", currentProductTotalPrice);
  // const onRemoveFromCart = (productId) => {
  //   dispatch(removeFromCart(productId));
  // };
  return (
    <>
      <Wrapper>
        <li>
          <ProductImg src={image} alt={name} />
        </li>
        <li>
          <ProductName>{name}</ProductName>
        </li>
        <li>
          <ProductPrice>{price}</ProductPrice>
        </li>
        <li>
          <CounterCart
            key={id}
            value={quantity}
            onValueChange={(newQuantity) => handleQuantityChange(newQuantity)}
          />
        </li>
        <li>
          <TotalPrice>{currentProductTotalPrice}</TotalPrice>
        </li>
        <li>
          <Trash onClick={() => onRemoveFromCart(dispatch, id)} />
        </li>
      </Wrapper>
    </>
  );
};
export default CartPageItem;

CartPageItem.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
