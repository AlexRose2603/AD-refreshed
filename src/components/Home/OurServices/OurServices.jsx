import { Container, Title } from "../../../pages/HomePage/HomePage.styled";
import Icon from "../../Icon/Icon";
import {
  Item,
  ItemText,
  ItemTitle,
  LinkToDetails,
  ListOfServices,
  MoreDetailsLink,
  Subtitle,
} from "./OurServicesstyled";

const OurServices = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <Container>
        <Title>Послуги</Title>
        <Subtitle>Наша практика</Subtitle>
        <ListOfServices>
          <Item>
            <Icon iconName="icon-law-book" width="60px" height="60px" />
            <ItemTitle>Правова консультація</ItemTitle>
            <ItemText>
              Надання консультацій та порад щодо правил дорожнього руху, прав та
              обов&apos;язків водіїв, а також процедур в разі ДТП.
            </ItemText>
          </Item>
          <Item>
            <Icon iconName="icon-archive2" width="60px" height="60px" />
            <ItemTitle>Подача апеляцій та скарг</ItemTitle>
            <ItemText>
              Висунення апеляцій та скарг у випадках, коли клієнт не задоволений
              рішеннями суду або страхової компанії.
            </ItemText>
          </Item>
          <Item>
            <Icon iconName="icon-lawyer" width="60px" height="60px" />
            <ItemTitle>Представництво під час обговорень з поліцією</ItemTitle>
            <ItemText>
              Допомога в веденні переговорів та комунікація з правоохоронними
              органами в разі ДТП.
            </ItemText>
          </Item>
        </ListOfServices>
        <MoreDetailsLink>
          <LinkToDetails to="/services" onClick={handleLinkClick}>
            Детальніше
          </LinkToDetails>
        </MoreDetailsLink>
      </Container>
    </>
  );
};
export default OurServices;
