import styled from "styled-components";

export const SubTitle = styled.h4`
  font-size: 56px;
  font-weight: 800;
  line-height: 56px;
  margin-bottom: 70px;
  text-align: center;
  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 46px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 25px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`;

export const TeamList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0 15px;
  @media screen and (min-width: 769px) and (max-width: 1919px) {
    gap: 15px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Member = styled.li`
  text-align: center;
  background-color: white;
  border-radius: 30px;
  img {
    height: 391px;
    border-radius: 30px;
    object-fit: cover;
    object-position: 50% 50%;
    @media screen and (min-width: 1280px) and (max-width: 1919px) {
      border-radius: 20px;
      height: 285px;
    }
    @media screen and (min-width: 360px) and (max-width: 1279px) {
      border-radius: 25px;
      height: 330px;
    }
  }
`;

export const MemberInfo = styled.div`
  padding: 20px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    padding: 15px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    padding: 17px;
  }
`;

export const MemberName = styled.p`
  font-size: 27px;
  font-weight: 700;
  line-height: 32.4px;
  margin-bottom: 10px;

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const MemberPosition = styled.p`
  color: #7d7d7d;
  font-size: 18px;
  line-height: 18px;

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
