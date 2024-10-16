import styled from "styled-components";

export const Container = styled.div`
  background-color: #242222;
  margin-top: 100px;
  padding: 100px 150px;
`;

export const NavStyles = styled.div`
  .swiper-button-prev {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 8px;

    background-color: #cd9c8a;
    color: #1e1e20;
    &::after {
      font-size: 14px;
      font-weight: 700;
    }
  }

  .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 8px;
    background-color: #cd9c8a;
    color: #1e1e20;

    &::after {
      font-size: 14px;
      font-weight: 700;
    }
  }
`;
