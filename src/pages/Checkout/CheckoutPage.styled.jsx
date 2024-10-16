import { Form } from "formik";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: white;
  color: black;
  padding: 50px 100px;
`;

export const StyledForm = styled(Form)`
  width: 60%;
`;

export const FormList = styled.ul``;

export const ListItem = styled.li``;

export const SectionName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const NameWrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: space-between;
`;

export const Label = styled.label``;

export const Input = styled.input`
  border: 2px solid black;
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  font-size: 16px;
`;

export const RadioWrapper = styled.ul`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
`;

export const RadioLi = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 2px solid black;
  padding: 16px 0 16px 16px;
  border-radius: 8px;
  width: 100%;
`;
const RadioInputStyles = `
 appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  border: 1.5px solid black;
  border-radius: 50%;
  cursor: pointer;
  &:checked {
    background-color: #cd9c8a;
    border: 2px solid black;
  }`;

export const RadioInput = styled.input.attrs({ type: "radio" })`
  ${RadioInputStyles}
`;
export const RadioLabel = styled.label`
  font-size: 16px;
`;
export const ShowOfficeAddress = styled.div`
  padding: 10px;
  color: #3d3d3d;
  font-size: 16px;
  font-weight: bold;
  border: 1.5px solid #f79443;
  border-radius: 10px;
`;

export const CitiesBox = styled.div`
  max-height: 300px;
  width: 100%;
  overflow-y: scroll;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 0 10px 10px;
  border-radius: 10px;
  border: 1.5px solid #f79443;
  color: #3d3d3d;
  font-size: 16px;
`;

export const BtnBox = styled.div`
  margin-top: 30px;
  display: flex;
  width: 550px;
`;

const CommonBtnStyles = `
padding: 10px 0;
text-align: center;
text-transform: uppercase;
font-size: 18px;
width: 100%;
`;

export const BackToCartLink = styled(Link)`
  ${CommonBtnStyles}
  border: 1px solid black;
  color: black;
  margin-right: 20px;
  &:hover {
    background-color: #f79443;
    border: 1px solid #f79443;
    color: white;
  }
`;

export const FinishOrderBtn = styled.button`
  ${CommonBtnStyles}
  background-color: #f79443;
  border: 1px solid #f79443;
  color: white;

  &:hover {
    background-color: black;
    border: 1px solid black;
  }
`;

/////////CITIES SELECTION//////////////////

export const ListOfCities = styled.ul`
  padding: 10px;
`;

export const ListRadioItem = styled.li`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  border: 1px solid #b4b2b2;
  border-radius: 10px;
  padding: 5px 6px;
`;

export const CityRadioInput = styled.input.attrs({ type: "radio" })`
  ${RadioInputStyles}
  border: 1px solid #f79443;
`;

//////////POST OFFICES SELECTION/////////////////

export const SelectPostWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const PostOfficeInput = styled.input`
  width: 100%;
  border: 1.5px solid #f79443;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
`;

export const ArrowToggle = styled(IoIosArrowUp)`
  position: absolute;
  right: 4%;
  top: 27%;
  width: 20px;
  height: 20px;
  transform: rotate(180deg);
  cursor: pointer;
`;
