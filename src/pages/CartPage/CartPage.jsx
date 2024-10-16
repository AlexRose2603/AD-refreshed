import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setShoppingListAction } from "../../redux/cart/actions/actions";
import CartPageItem from "../../components/CartPageItem/CartPageItem";
import PropTypes from "prop-types";
import {
  ApplyCouponBtn,
  CheckoutLink,
  Container,
  CouponInput,
  CouponWrapper,
  Line,
  LinksBox,
  OrderContainer,
  OrderInfoText,
  ReturnToStoreLink,
  SectionItem,
  SectionsList,
  Title,
  TotalPrice,
} from "./CartPage.styled";

const CartPage = () => {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shoppingList.shoppingList);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  useEffect(() => {
    const shoppingListFromLocalStorage =
      JSON.parse(localStorage.getItem("shoppingList")) || [];
    dispatch(setShoppingListAction(shoppingListFromLocalStorage));
  }, [dispatch]);

  useEffect(() => {
    let total = 0;
    shoppingList.forEach((product) => {
      const quantity = parseFloat(product.quantity);
      const price = parseFloat(product.price);

      if (!isNaN(quantity) && !isNaN(price)) {
        const totalPrice = quantity * price;
        total += totalPrice;
      }
    });
    setTotalCartPrice(total);
    console.log(total);
  }, [shoppingList]);

  return (
    <>
      <Container>
        <Title>Обрані товари</Title>
        <SectionsList>
          <SectionItem>Товар</SectionItem>
          <SectionItem>Ціна</SectionItem>
          <SectionItem>Кількість</SectionItem>
          <SectionItem>Загальна ціна</SectionItem>
          <SectionItem>Видалити</SectionItem>
        </SectionsList>
        <Line></Line>

        {!shoppingList || shoppingList.length === 0 ? (
          <div style={{ color: "black" }}>nothing added</div>
        ) : (
          <div>
            {shoppingList.map((product) => {
              const totalPrice =
                parseFloat(product.quantity) * parseFloat(product.price);
              return (
                <CartPageItem
                  key={product.id}
                  id={product.id}
                  name={product.title}
                  price={product.price}
                  totalPrice={totalPrice.toFixed(2)}
                  image={product.imageUrl}
                />
              );
            })}
          </div>
        )}
        <OrderInfoText>Інформація про замовлення</OrderInfoText>
        <Line style={{ backgroundColor: "black" }}></Line>
        <OrderContainer>
          <CouponWrapper>
            <p>Купон</p>
            <CouponInput>
              <input type="text" placeholder="Код купона" />
              <ApplyCouponBtn type="button">Примінити</ApplyCouponBtn>
            </CouponInput>
          </CouponWrapper>
          <LinksBox>
            <TotalPrice>
              Всього: <span>{totalCartPrice.toFixed(2)} UAH</span>
            </TotalPrice>
            <CheckoutLink to="/checkout">Перейти до оплати</CheckoutLink>
            <ReturnToStoreLink to="/shop">Продовжити покупки</ReturnToStoreLink>
          </LinksBox>
        </OrderContainer>
      </Container>
    </>
  );
};

export default CartPage;

CartPageItem.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
