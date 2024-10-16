import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductCard } from "../../redux/productCard/operationsStore";
import Counter from "./AmountChange/AmountChange";
import ModalCart from "../ModalCart/ModalCart";
import { Report } from "notiflix/build/notiflix-report-aio";
import { HiMiniArrowUp } from "react-icons/hi2";
import {
  addToCart,
  updateProductQuantity,
  updateTotalProductsCount,
} from "../../redux/cart/reducers/cartSlice";
import Loader from "../Loader/Loader";
import {
  AddToCartBtn,
  Amount,
  BuyBtnLink,
  CardContainer,
  Description,
  GoBackLink,
  InfoBox,
  Price,
  ProductImg,
  ProductName,
  PurchaseBox,
  Wrapper,
} from "./CardInfo.styled";

const CardInfo = () => {
  const { productId } = useParams();
  console.log("ProductId:", productId);
  const dispatch = useDispatch();
  const [isProductId, setIsProductId] = useState(null);
  const [selectedModalProducts, setSelectedModalProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartList = useSelector((state) => state.shoppingList.shoppingList);
  console.log(cartList);
  const productCard = useSelector((state) => state.productCard);

  useEffect(() => {
    if (productId) dispatch(fetchProductCard(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    console.log("Selected modal products changed:", selectedModalProducts);
  }, [selectedModalProducts]);

  if (productCard.isLoading) {
    return <Loader />;
  }
  //don't change anything here!(empty obj)
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);

    dispatch(
      updateProductQuantity({ productId: productId, quantity: newQuantity })
    );
  };

  const getLoggedIn = () => {
    if (!isLoggedIn) {
      Report.info(
        "Упс",
        "Потрібно залогінитись або зареєструватись щоб додати товар до корзини"
      );
      return false;
    }
    return true;
  };

  const updateCartAndModal = (itemToAdd) => {
    const existingProductIndex = cartList.findIndex(
      (product) => product.id === itemToAdd.id
    );

    if (existingProductIndex !== -1) {
      const updatedModalProducts = selectedModalProducts.map((product, index) =>
        index === existingProductIndex
          ? { ...product, quantity: product.quantity + itemToAdd.quantity }
          : product
      );
      setSelectedModalProducts(updatedModalProducts);
    } else {
      dispatch(
        updateProductQuantity({
          productId: itemToAdd.id,
          quantity: itemToAdd.quantity,
        })
      );

      const updatedModalProducts = [...selectedModalProducts, itemToAdd];
      setSelectedModalProducts(updatedModalProducts);
      // addToCartList(itemToAdd);
      dispatch(updateTotalProductsCount());
    }
  };

  const handleAddToCartClick = () => {
    const isLoggedIn = getLoggedIn();
    if (isLoggedIn) {
      const totalProductPrice = quantity * parseFloat(productCard.data.price);
      const itemToAdd = {
        id: productCard.data.id,
        title: productCard.data.title,
        price: productCard.data.price,
        totalPrice: totalProductPrice,
        quantity: quantity,
        imageUrl: productCard.data.imageUrl,
      };
      dispatch(addToCart(itemToAdd));
      updateCartAndModal(itemToAdd);
      setIsProductId(productId);
      setIsModalOpen(true);
      console.log("Добавлено в корзину");
    }
  };

  const totalPrice = parseFloat(quantity) * parseFloat(productCard.data.price);

  return (
    <>
      <Wrapper onClick={() => setIsModalOpen(false)}>
        <GoBackLink to="/shop">
          <HiMiniArrowUp
            style={{
              width: "25px",
              height: "25px",
              fill: "white",
              transform: "rotate(-90deg)",
            }}
          />
        </GoBackLink>

        <CardContainer key={productCard.data.id} id={productCard.data.id}>
          {" "}
          <ProductImg
            src={productCard.data.imageUrl}
            alt={productCard.data.title}
          />
          <InfoBox>
            <ProductName>{productCard.data.title}</ProductName>
            <Price> Ціна: {totalPrice} UAH</Price>
            <Description>{productCard.data.description}</Description>
            <Amount>Кількість</Amount>
            <PurchaseBox>
              <Counter value={quantity} onValueChange={handleQuantityChange} />
              <AddToCartBtn
                type="button"
                onClick={() => handleAddToCartClick()}
              >
                Додати у кошик
              </AddToCartBtn>
              {isModalOpen && (
                <ModalCart selectedProducts={selectedModalProducts} />
              )}
            </PurchaseBox>
            <BuyBtnLink>Купити</BuyBtnLink>
          </InfoBox>
        </CardContainer>
      </Wrapper>
    </>
  );
};

export default CardInfo;
