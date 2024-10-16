import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddresses } from "../../redux/novaPost/operations";
import {
  ArrowToggle,
  BackToCartLink,
  BtnBox,
  CitiesBox,
  CityRadioInput,
  FinishOrderBtn,
  Input,
  ListItem,
  ListOfCities,
  ListRadioItem,
  NameWrapper,
  PageContainer,
  PostOfficeInput,
  RadioInput,
  RadioLabel,
  RadioLi,
  RadioWrapper,
  SearchInput,
  SectionName,
  SelectPostWrapper,
  ShowOfficeAddress,
  StyledForm,
} from "./CheckoutPage.styled";
import { fetchPostOffices } from "../../redux/novaPost/offices/operations";

const checkoutSchema = Yup.object().shape({
  name: Yup.string().min(2).max(12).required("Введіть ім'я"),
  lastName: Yup.string().required(),
  email: Yup.string().email("Invalid email").required("Це обов'язкове поле"),
  phone: Yup.string().required("Це обов'язкове поле"),
});

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
};
const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [showAddress, setShowAddress] = useState(false);
  const [showCityList, setShowCityList] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPostOffice, setSelectedPostOffice] = useState(null);
  const [filteredPostOffices, setFilteredPostOffices] = useState([]);

  const cityList = useSelector((state) => state.novaPostCities.data);
  console.log("LIST OF CITIES", cityList);

  const postOffices = useSelector((state) => state.novaPostOffices.data);
  console.log("POST OFFICES:", postOffices);

  useEffect(() => {
    dispatch(fetchAddresses(""));
  }, [dispatch]);

  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchPostOffices(selectedCity.ref)).then((response) => {
        setFilteredPostOffices(response.data);
      });
    }
  }, [dispatch, selectedCity]);

  useEffect(() => {
    if (selectedCity && postOffices.length > 0) {
      const filtered = postOffices.filter(
        (office) => office.cityRef === selectedCity.cityRef
      );
      setFilteredPostOffices(filtered);
    }
  }, [selectedCity, postOffices]);

  const onShowCityList = (event) => {
    if (event.target.id === "novaPost") {
      setShowCityList(true);
      setShowSearch(true);
      setShowAddress(false);
    } else {
      setShowCityList(false);
    }
  };

  const onShowOfficeAddress = (event) => {
    if (event.target.id === "office") {
      setShowAddress(true);
      setShowCityList(false);
      setShowSearch(false);
    } else {
      setShowAddress(false);
    }
  };
  const handleSearchChange = async (e) => {
    const searchValue = e.target.value;
    setSearchText(searchValue);
    dispatch(fetchAddresses(searchValue));

    const filteredInput = cityList.filter((city) =>
      city.present.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCities(filteredInput);
  };

  const handleCitySelection = (city) => {
    const cityRef = city.ref;
    console.log("City Ref", cityRef);
    setSelectedCity(city);
    setSearchText(city.present);
    setShowSearch(true);
    setShowCityList(false);
    setShowAddress(false);
    setFilteredCities([]);
    // setSelectedPostOffice(null);
    setShowDropdown(false);
    dispatch(fetchPostOffices(cityRef));
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown && selectedCity) {
      dispatch(fetchPostOffices(selectedCity.present));
    }
  };

  console.log("selected city:", selectedCity);
  const handlePostOfficeSelection = (warehouse) => {
    setSelectedPostOffice(warehouse);
    setShowDropdown(false);
  };

  // const handleSubmit = (values, { resetForm }) => {};
  return (
    <>
      <PageContainer>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({ errors, touched, values, handleChange }) => (
              <div>
                <StyledForm>
                  <ul>
                    <SectionName>Контактна інформація</SectionName>
                    <NameWrapper>
                      <ListItem>
                        <label htmlFor="name"></label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Ім'я *"
                          style={{
                            paddingRight: "160px",
                          }}
                          onChange={handleChange}
                        />
                        <ErrorMessage name="name" />
                      </ListItem>
                      <ListItem>
                        <label htmlFor="lastName"></label>
                        <Input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Прізвище *"
                          style={{
                            paddingRight: "160px",
                          }}
                          onChange={handleChange}
                        />
                        <ErrorMessage name="lastName" />
                      </ListItem>
                    </NameWrapper>
                    <ListItem>
                      <label htmlFor="email"></label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Пошта *"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="email" />
                    </ListItem>
                    <ListItem>
                      <label htmlFor="phone"></label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Телефон *"
                        onChange={handleChange}
                      />
                      <ErrorMessage name="phone" />
                    </ListItem>
                    <SectionName>Спосіб доставки</SectionName>
                    <RadioWrapper>
                      <RadioLi>
                        <RadioInput
                          type="radio"
                          id="novaPost"
                          name="deliveryMethod"
                          value="Нова пошта"
                          onChange={onShowCityList}
                        />
                        <RadioLabel htmlFor="novaPost">Нова пошта</RadioLabel>
                        <ErrorMessage name="novaPost" />
                      </RadioLi>
                      <RadioLi>
                        <RadioInput
                          type="radio"
                          id="office"
                          name="deliveryMethod"
                          value="Самовивіз з офісу"
                          onChange={onShowOfficeAddress}
                        />
                        <RadioLabel htmlFor="office">
                          Самовивіз з офісу
                        </RadioLabel>
                        <ErrorMessage name="office" />
                      </RadioLi>
                    </RadioWrapper>
                    {showAddress && (
                      <ShowOfficeAddress>
                        м.Полтава, вул.Незалежності 4, офіс 36
                      </ShowOfficeAddress>
                    )}
                  </ul>
                  {showSearch && (
                    <div>
                      <label htmlFor="search"></label>
                      <SearchInput
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Введіть назву населеного пункту"
                        value={searchText}
                        onChange={handleSearchChange}
                        autoComplete="off"
                      />
                      <CitiesBox>
                        {filteredCities.length > 0 && (
                          <>
                            <ListOfCities>
                              {filteredCities.map((city, index) => (
                                <ListRadioItem key={index}>
                                  <CityRadioInput
                                    type="radio"
                                    id={`city-${index}`}
                                    name="selectedCity"
                                    value={city.mainDescription}
                                    onChange={() => handleCitySelection(city)}
                                  />
                                  <label htmlFor={`city-${index}`}>
                                    {city.present}
                                  </label>
                                </ListRadioItem>
                              ))}
                            </ListOfCities>
                          </>
                        )}
                      </CitiesBox>
                      <SelectPostWrapper onClick={toggleDropdown}>
                        <label htmlFor="selectedPostOffice"></label>
                        <PostOfficeInput
                          type="text"
                          id="selectedPostOffice"
                          name="selectedPostOffice"
                          value={selectedPostOffice || ""}
                          placeholder="Оберіть відділення"
                          readOnly
                        />
                        <ArrowToggle onClick={toggleDropdown} />
                      </SelectPostWrapper>
                      {showDropdown && (
                        <ul>
                          {filteredPostOffices.map((warehouse, index) => (
                            <ListRadioItem key={index}>
                              <RadioInput
                                type="radio"
                                id="selectedPostOffice"
                                name="selectedPostOffice"
                                onClick={() =>
                                  handlePostOfficeSelection(warehouse)
                                }
                              />
                              <label htmlFor="selectedPostOffice">
                                {" "}
                                {warehouse.description}
                              </label>
                            </ListRadioItem>
                          ))}
                        </ul>
                      )}
                      <SectionName>Спосіб оплати</SectionName>
                      <RadioWrapper>
                        <RadioLi>
                          <RadioInput type="radio" id="" name="" />
                          <label htmlFor="">Оплата при отриманні</label>
                        </RadioLi>
                        <RadioLi>
                          <RadioInput type="radio" id="" name="" />
                          <label htmlFor="">Оплата онлайн</label>
                        </RadioLi>
                      </RadioWrapper>
                    </div>
                  )}

                  <BtnBox>
                    <BackToCartLink to="/shopping-cart">
                      Назад до корзини
                    </BackToCartLink>
                    <FinishOrderBtn type="submit">Замовити</FinishOrderBtn>
                  </BtnBox>
                </StyledForm>
              </div>
            )}
          </Formik>
        </div>
        <div></div>
      </PageContainer>
    </>
  );
};
export default CheckoutPage;
