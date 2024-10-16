import styled from "styled-components";
// import Icon from "../../Icon/Icon";

export const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  min-height: 500px;
  margin-bottom: 60px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    gap: 22px;
    min-height: 363px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

export const SideOne = styled.div`
  width: 716px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    width: 521px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: auto;
  }
`;

export const Title = styled.h3`
  color: #fe9901;
  font-size: 25px;
  font-weight: 300;
  line-height: 30px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 20px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 16px;
  }
`;

export const SubTitle = styled.p`
  font-size: 56px;
  font-weight: 800;
  line-height: 67.2px;
  margin-bottom: 30px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    font-size: 46px;
    line-height: 46px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 35px;
    margin-bottom: 25px;
    line-height: 120%;
    letter-spacing: 0%;
  }
`;
export const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  &:not(:first-child) {
    margin-top: 20px;
  }

  @media screen and (min-width: 360px) and (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const Photo = styled.img`
  border-radius: 30px;
  object-fit: cover;
  width: 50%;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 100%;
    border-radius: 8%;
  }
`;

export const AchievmentList = styled.ul`
  display: flex;
  gap: 40px;

  @media screen and (min-width: 1280px) and (max-width: 1919px) {
    gap: 30px;
  }
  @media screen and (min-width: 360px) and (max-width: 768px) {
    flex-direction: column;
  }
`;

// export const IconVar = styled(Icon)`
//   width: 54px;
//   height: 54px;
//   stroke: #fe9901;
//   fill: #fe9901;

//   @media screen and (min-width: 1280px) and (max-width: 1919px) {
//     width: 40px;
//     height: 40px;
//   }
// `;

export const Item = styled.li`
  display: flex;
  gap: 10px;
  width: 25%;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 100%;
  }
`;

export const SubName = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
export const SubText = styled.p`
  font-size: 16px;
  line-height: 24px;

  @media screen and (min-width: 360px) and (max-width: 1919px) {
    font-size: 14px;
    line-height: 21px;
  }
`;
