import styled from "styled-components";
import { TfiHeart } from "react-icons/tfi";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

const AddToFav = styled(TfiHeart)`
  fill: ${(props) => (props.isFavourite ? "red" : "black")};
  &:hover {
    transform: scale(1.1);
    fill: #c74810;
  }
`;

export default AddToFav;

const HeartBasic = `
width: 22px;
  height: 22px;
  cursor: pointer;
  transition: all 0.3s ease;
   &:hover {
    transform: scale(1.1);
    fill: #c74810;
  }`;

export const EmptyHeart = styled(GoHeart)`
  ${HeartBasic}
`;

export const FilledHeart = styled(GoHeartFill)`
  ${HeartBasic}
  fill: #c74810;
`;
