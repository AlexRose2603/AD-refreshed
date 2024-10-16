import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../redux/auth/operations";
import logo from "../../../assets/images/registration-AD.png";
import { useState } from "react";
import {
  ErrorLogMsg,
  FailedLogInMsg,
  FieldContainer,
  Label,
  LastText,
  LoginBtn,
  StyledForm,
  StyledInput,
} from "./LoginForm.styled";
import { OverReg, Title, TitleBox } from "../RegisterForm/RegisterForm.styled";

const FormError = ({ name }) => {
  return <ErrorMessage name={name} render={(msg) => <div>{msg}</div>} />;
};

const schema = Yup.object().shape({
  isTgLogin: Yup.bool(),
  login: Yup.string().required("Введіть логін"),
  passwordHash: Yup.string()
    .min(6, "Пароль не може бути коротшим ніж 6 символів")
    .max(16, "Пароль не може бути довшим ніж 16 символів")
    .required("Введіть пароль")
    .test(
      "password-length",

      function (value) {
        if (!value) {
          return true;
        }
        return value.length >= 6 && value.length <= 16;
      }
    ),
});

const initialValues = {
  isTgLogin: false,
  login: "",
  passwordHash: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("loggedIn:", isLoggedIn);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = ({ login, passwordHash }, { resetForm }) => {
    dispatch(logIn({ login, passwordHash })).then((response) => {
      if (response.error) {
        setErrorMessage("Невірний логін або пароль");
      } else {
        setErrorMessage("");
        resetForm();
        navigate("/");
      }
    });
    console.log(login, passwordHash);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ errors, values, touched, handleChange, handleBlur }) => (
          <OverReg>
            <StyledForm autoComplete="off">
              <TitleBox>
                <img src={logo} alt="" />
                <Title>Авторизація користувача</Title>
                <p>Авторизуйтеся до вашого особистого кабінету</p>
              </TitleBox>

              <FieldContainer>
                <Label htmlFor="login"></Label>
                <StyledInput
                  type="text"
                  name="login"
                  placeholder="Введіть логін"
                  value={values.login}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={touched.login && errors.login ? "error" : ""}
                />
                {touched.login && errors.login && (
                  <ErrorLogMsg name="login">{errors.login}</ErrorLogMsg>
                )}

                {/* <FormError
                  name="login"
                  component="div"
                  message="Введіть логін"
                /> */}
              </FieldContainer>
              <FieldContainer>
                <Label htmlFor="passwordHash"></Label>
                <StyledInput
                  type="password"
                  name="passwordHash"
                  placeholder="Введіть пароль"
                  value={values.passwordHash}
                  onChange={handleChange}
                  className={
                    touched.passwordHash && errors.passwordHash ? "error" : ""
                  }
                />
                {touched.passwordHash && errors.passwordHash && (
                  <ErrorLogMsg name="passwordHash">
                    {errors.passwordHash}
                  </ErrorLogMsg>
                )}
              </FieldContainer>
              {errorMessage && <FailedLogInMsg>{errorMessage}</FailedLogInMsg>}

              <LoginBtn type="submit">Авторизуватись</LoginBtn>
              <Link to="/registration">
                <LastText>
                  Ще немає акаунта? <span>Зареєструватись</span>
                </LastText>
              </Link>
            </StyledForm>
          </OverReg>
        )}
      </Formik>
    </>
  );
};
export default LoginForm;

FormError.propTypes = {
  name: PropTypes.string.isRequired,
};
