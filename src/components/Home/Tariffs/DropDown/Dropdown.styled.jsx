import styled from "styled-components";

export const DropdownContainer = styled.div`
  display: inline-block;
`;

export const DropdownToggle = styled.div`
  cursor: pointer;
`;

export const DropdownOptions = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: white;
`;

export const DropdownOption = styled.div`
  padding: 10px 100px;
  width: 100%;
  border: 1px solid teal;
  border-radius: 40px;
  cursor: pointer;
`;
