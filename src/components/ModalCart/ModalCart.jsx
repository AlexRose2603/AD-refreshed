import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";
import { onRemoveFromCart } from "../../utils/onRemoveFromCart";
import { setShoppingListAction } from "../../redux/cart/actions/actions";
import emptyCart from "../../assets/images/empty-cart2.png";
// import SimpleBar from "simplebar-react";
// import "simplebar-react/dist/simplebar.min.css";
import {
  BtnBox,
  CartImg,
  CartLink,
  CartTitle,
  CartWrapper,
  CheckoutLink,
  Info,
  Line,
  ModalProductName,
  ProductWrapper,
  TotalPrice,
  Trash,
  Wrapper,
} from "./ModalCart.styled";

const ModalCart = ({ isOpen }) => {
  const dispatch = useDispatch();

  const shoppingList = useSelector((state) => state.shoppingList.shoppingList);

  useEffect(() => {
    const shoppingListFromLocalStorage =
      JSON.parse(localStorage.getItem("shoppingList")) || [];
    dispatch(setShoppingListAction(shoppingListFromLocalStorage));
  }, [dispatch]);

  const handleClickInsideModal = (e) => {
    e.stopPropagation();
  };

  const totalPrice = shoppingList.reduce((total, product) => {
    const price = parseFloat(product.price);
    const quantity = parseFloat(product.quantity);
    if (!isNaN(price) && !isNaN(quantity)) {
      return total + price * quantity;
    } else {
      return total;
    }
  }, 0);

  return (
    <>
      <Wrapper isOpen={isOpen} onClick={handleClickInsideModal}>
        {!shoppingList || shoppingList.length === 0 ? (
          <CartWrapper>
            <img src={emptyCart} alt="empty cart" style={{ width: "300px" }} />
            <p>Ви ще нічого не додали до корзини</p>
          </CartWrapper>
        ) : (
          <>
            <CartTitle> Обрані покупки</CartTitle>
            <Line></Line>
            {/* <SimpleBar
              style={{ maxHeight: 500 }}
              forceVisible="y"
              autoHide={false}
            > */}
            {shoppingList.map((product) => {
              return (
                <>
                  <ProductWrapper key={product.id} id={product.id}>
                    <CartImg src={product.imageUrl} alt={product.title} />
                    <Info>
                      <ModalProductName>{product.title}</ModalProductName>
                      <p>
                        {product.quantity}x<span> {product.price} UAH</span>
                      </p>
                    </Info>
                    <Trash
                      style={{ width: "18px", height: "18px", fill: "white" }}
                      onClick={() => onRemoveFromCart(dispatch, product.id)}
                    />
                  </ProductWrapper>
                  <Line></Line>
                </>
              );
            })}
            <TotalPrice>Разом до сплати: {totalPrice} UAH</TotalPrice>
            {/* </SimpleBar> */}
            <BtnBox>
              {" "}
              <CheckoutLink to="/checkout">Перейти до оплати</CheckoutLink>
              <CartLink to="/shopping-cart">Перейти до корзини</CartLink>
            </BtnBox>
          </>
        )}
      </Wrapper>
    </>
  );
};
export default ModalCart;

ModalCart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
