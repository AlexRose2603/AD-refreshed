import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../redux/auth/operations";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Report } from "notiflix/build/notiflix-report-aio";
import logo from "../../../assets/images/registration-AD.png";

import {
  ClosedEyeIcon,
  ErrorMsg,
  Input,
  Label,
  List,
  ListItem,
  LoginText,
  OpenedEyeIcon,
  OverReg,
  StyledForm,
  StyledLink,
  SubmitBtn,
  Title,
  TitleBox,
} from "./RegisterForm.styled";

const registerSchema = Yup.object().shape({
  isTgReg: Yup.bool(),
  login: Yup.string()
    .min(4, "Занадто короткий логін")
    .required("Введіть логін"),
  name: Yup.string()
    .min(2, "Ім'я повинно складатися мінімум з 2 літер")
    .max(12, "Занадто довге ім'я")
    .required("Введіть ім'я"),
  lastName: Yup.string()
    .min(3, "Дуже коротке прізвище")
    .max(15, "Занадто довге прізвище")
    .required("Введіть прізвище"),
  phone: Yup.string()
    .matches(/^\+380\d{9}$/, "Номер повинен складатися тільки з цифр")
    .max(13, "Невірно введений номер")
    .required("Введіть номер телефону"),
  email: Yup.string()
    .email("Пошта не дійсна")
    .trim()
    .lowercase()
    .test("email-domain", "Неіснуючий домен", (value) => {
      if (!value) return false;
      return value.endsWith(".com") || value.endsWith(".ua");
    })
    .required("Введіть пошту"),

  passwordHash: Yup.string()
    .min(6, "Пароль не може бути коротшим ніж 6 символів")
    .max(16, "Пароль не може бути довшим ніж 16 символів")
    .required("Введіть пароль"),
  confirmedPassword: Yup.string()
    .required("Підтвердіть пароль")
    .oneOf([Yup.ref("passwordHash"), null], "Пароль не співпадає"),
  city: Yup.string().required("Введіть назву вашого міста"),
  postNumber: Yup.string(),
  postAddress: Yup.string(),
  authInteractionStatus: Yup.string(),
});

const initialValues = {
  isTgReg: false,
  login: "",
  name: "",
  lastName: "",
  phone: "",
  email: "",
  passwordHash: "",
  confirmedPassword: "",
  city: "",
  postNumber: "",
  postAddress: "",
  authInteractionStatus: "Registered",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  console.log(errorMessage);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("loggedIn:", isLoggedIn);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const handleSubmit = (values, { resetForm, setFieldError }) => {
    dispatch(register(values))
      .then((response) => {
        console.log("Response from backend:", response);

        if (response.error && response.error.message) {
          console.log(
            "Error encountered during registration #1:",
            response.error.message
          );

          const receivedErrorMessage = response.error.message;
          setErrorMessage(receivedErrorMessage);
          console.log("receivedErrorMessage:", receivedErrorMessage);

          if (receivedErrorMessage === "This login is already in use") {
            setFieldError("login", "Цей логін вже використовується");
          } else if (
            receivedErrorMessage === "This phone number is already in use"
          ) {
            setFieldError("phone", "Цей номер вже використовується");
          } else {
            console.log("хз как это вытащить");
          }
        } else {
          Report.success("Вітаємо!", "Реєстрація пройшла успішно", "Okay");

          setErrorMessage("");
          resetForm();
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("Error encountered during registration2:", error);
        setErrorMessage(
          "Registration failed due to an unknown error. Please try again later."
        );
      });
    console.log(values);
  };

  const handlePhoneChange = (e, onPhoneChange) => {
    const currentValue = e.target.value;
    const prefix = "+380";

    if (!currentValue.startsWith(prefix)) {
      onPhoneChange({
        target: {
          name: "phone",
          value: prefix,
        },
      });
    } else {
      const numericPart = currentValue.slice(prefix.length).replace(/\D/g, "");
      const limitedNumericPart = numericPart.slice(0, 9);
      const formattedValue = prefix + limitedNumericPart;
      onPhoneChange({
        target: {
          name: "phone",
          value: formattedValue,
        },
      });
    }
  };

  const handleKeyPress = (e, setFieldValue, fieldName) => {
    const regex = new RegExp("^[a-zA-Zа-яА-ЯІіЇїЄєҐґ'-\\s]+$");
    const key = String.fromCharCode(!e.charCode ? e.which : e.charCode);

    if (!regex.test(key) && e.key !== "Backspace" && e.key !== "Enter") {
      e.preventDefault();
    } else {
      const { value } = e.target;
      setFieldValue(
        fieldName,
        value.replace(/[^a-zA-Zа-яА-ЯІіЇїЄєҐґ'-\s]/g, "")
      );
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmedPassword = () => {
    setShowConfirmedPassword(
      (prevShowConfirmedPassword) => !prevShowConfirmedPassword
    );
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <OverReg>
            <StyledForm>
              <TitleBox>
                <img src={logo} alt="" />
                <Title>Реєстрація користувача</Title>
                <p>Створіть ваш обліковий запис</p>
              </TitleBox>

              <List>
                <div style={{ width: "100%" }}>
                  <ListItem>
                    <Label htmlFor="login"></Label>
                    <Input
                      type="text"
                      id="login"
                      name="login"
                      placeholder="Логін *"
                      autocomplete="off"
                      value={values.login}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.login && errors.login ? "error" : ""}
                    />

                    {touched.login && errors.login && (
                      <ErrorMsg name="login">{errors.login}</ErrorMsg>
                    )}
                  </ListItem>
                  {console.log("Formik values:", values)}
                  {console.log("Formik errors:", errors)}
                  <ListItem>
                    <Label htmlFor="name"></Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ім'я *"
                      autocomplete="off"
                      value={values.name}
                      onChange={(e) => {
                        const { value } = e.target;
                        setFieldValue(
                          "name",
                          value.replace(/[^a-zA-Zа-яА-ЯІіЇїЄєҐґ'-\s]/g, "")
                        );
                      }}
                      onBlur={handleBlur}
                      onKeyPress={(e) => handleKeyPress(e, setFieldValue)}
                      className={touched.name && errors.name ? "error" : ""}
                    />
                    {touched.name && errors.name && (
                      <ErrorMsg name="name">{errors.name}</ErrorMsg>
                    )}
                  </ListItem>
                  <ListItem>
                    <Label htmlFor="lastName"></Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Прізвище *"
                      autocomplete="off"
                      value={values.lastName}
                      onChange={(e) => {
                        const { value } = e.target;
                        setFieldValue(
                          "lastName",
                          value.replace(/[^a-zA-Zа-яА-ЯІіЇїЄєҐґ'-\s]/g, "")
                        );
                      }}
                      onBlur={handleBlur}
                      onKeyPress={(e) => handleKeyPress(e, setFieldValue)}
                      className={
                        touched.lastName && errors.lastName ? "error" : ""
                      }
                    />
                    {touched.lastName && errors.lastName && (
                      <ErrorMsg name="lastName">{errors.lastName}</ErrorMsg>
                    )}
                  </ListItem>
                  <ListItem>
                    <Label htmlFor="phone"></Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Телефон *"
                      autocomplete="off"
                      value={values.phone}
                      onChange={(e) => {
                        handlePhoneChange(e, handleChange);
                      }}
                      onBlur={handleBlur}
                      className={touched.phone && errors.phone ? "error" : ""}
                    />
                    {touched.phone && errors.phone && (
                      <ErrorMsg name="phone">{errors.phone}</ErrorMsg>
                    )}
                  </ListItem>
                  <ListItem>
                    <Label htmlFor="email"></Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Пошта *"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.email && errors.email ? "error" : ""}
                    />
                    {touched.email && errors.email && (
                      <ErrorMsg name="email">{errors.email}</ErrorMsg>
                    )}
                  </ListItem>
                </div>
                <div style={{ width: "100%" }}>
                  <ListItem>
                    <Label htmlFor="passwordHash"></Label>
                    <Input
                      type={showPassword ? "text" : "password"}
                      id="passwordHash"
                      name="passwordHash"
                      placeholder="Пароль *"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.passwordHash && errors.passwordHash
                          ? "error"
                          : ""
                      }
                    />
                    {touched.passwordHash && errors.passwordHash && (
                      <ErrorMsg name="passwordHash">
                        {errors.passwordHash}
                      </ErrorMsg>
                    )}
                    {showPassword ? (
                      <ClosedEyeIcon onClick={handleTogglePassword} />
                    ) : (
                      <OpenedEyeIcon onClick={handleTogglePassword} />
                    )}
                  </ListItem>
                  <ListItem>
                    <Label htmlFor="confirmedPassword"></Label>
                    <Input
                      type={showConfirmedPassword ? "text" : "password"}
                      id="confirmedPassword"
                      name="confirmedPassword"
                      placeholder="Підтвердіть пароль *"
                      value={values.confirmedPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.confirmedPassword && errors.confirmedPassword
                          ? "error"
                          : ""
                      }
                    />
                    {touched.confirmedPassword && errors.confirmedPassword && (
                      <ErrorMsg name="confirmedPassword">
                        {errors.confirmedPassword}
                      </ErrorMsg>
                    )}
                    {showConfirmedPassword ? (
                      <ClosedEyeIcon onClick={handleToggleConfirmedPassword} />
                    ) : (
                      <OpenedEyeIcon onClick={handleToggleConfirmedPassword} />
                    )}
                  </ListItem>
                  <ListItem>
                    <Label htmlFor="city"></Label>
                    <Input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Місто *"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={touched.city && errors.city ? "error" : ""}
                    />
                    {touched.city && errors.city && (
                      <ErrorMsg name="city">{errors.city}</ErrorMsg>
                    )}
                  </ListItem>
                  <ListItem>
                    <Label htmlFor="postNumber"></Label>
                    <Input
                      type="text"
                      id="postNumber"
                      name="postNumber"
                      placeholder="Відділення нової пошти"
                      value={values.postNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.postNumber && errors.postNumber ? "error" : ""
                      }
                    />
                    {touched.postNumber && errors.postNumber && (
                      <ErrorMsg name="postNumber">{errors.postNumber}</ErrorMsg>
                    )}
                  </ListItem>
                  <ListItem>
                    <Label htmlFor="postAddress"></Label>
                    <Input
                      type="text"
                      id="postAddress"
                      name="postAddress"
                      placeholder="Адреса доставки"
                      value={values.postAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.postAddress && errors.postAddress ? "error" : ""
                      }
                    />
                    {touched.postAddress && errors.postAddress && (
                      <ErrorMsg name="postAddress">
                        {errors.postAddress}
                      </ErrorMsg>
                    )}
                  </ListItem>
                </div>
              </List>
              <SubmitBtn type="submit">Зареєструватись</SubmitBtn>
              <LoginText>
                У мене вже є створений профіль
                <StyledLink to="/login">Авторизація</StyledLink>
              </LoginText>
            </StyledForm>
          </OverReg>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
