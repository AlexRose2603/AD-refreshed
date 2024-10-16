import Icon from "../../components/Icon/Icon";
import backImage from "../../assets/images/ourServises.jpg";
import { Container } from "../HomePage/HomePage.styled";
import {
  Block,
  BlockItem,
  BlockList,
  BlockName,
  BlockOfComplaints,
  Box,
  DiscountNotice,
  Item,
  Item2,
  ItemName,
  ItemName2,
  ItemText,
  ListOfDocs,
  ServiceList,
  SubTitle,
  Title,
  ViewPic,
} from "./ServicesPage.styled";

const ServicesPage = () => {
  return (
    <>
      <Box>
        <ViewPic src={backImage} alt="" />
        <Title>Наші послуги</Title>
      </Box>

      <Container>
        <SubTitle>Види послуг</SubTitle>
        <ServiceList>
          <Item>
            <Icon iconName="icon-phone" width="40px" height="40px" />

            <ItemName>Юридичні консультації</ItemName>
            <ItemText>
              Надання учасникам Клубу юридичних консультацій в телефонному
              режимі <span>з 8:00 до 20:00 год.</span> щодня (без вихідних), в
              тому числі у випадках зупинки поліцією. Якщо Ви плануєте далеку
              подорож у нічний час – попереджаєте нас заздалегідь і ми
              залишаємось з Вами на зв&apos;язку протягом усієї поїздки.
            </ItemText>
          </Item>
          <Item>
            <Icon
              iconName="icon-sheriff"
              width="33px"
              height="40px"
              stroke="#fe9901"
              fill="#fe9901"
            />
            <ItemName>Надання консультацій</ItemName>
            <ItemText>з питань діяльності Укртрансбезпеки, ТЦК та СП.</ItemText>
          </Item>
          <Item>
            <Icon
              iconName="icon-telega"
              width="48px"
              height="40px"
              stroke="#fe9901"
              fill="#fe9901"
            />
            <ItemName>Telegram-чат</ItemName>
            <ItemText>для учасників Клубу</ItemText>
          </Item>
          <Item>
            <Icon
              iconName="icon-wheel"
              width="40px"
              height="40px"
              stroke="#fe9901"
              fill="#fe9901"
            />
            <ItemName>ДТП</ItemName>
            <ItemText>
              Консультація з алгоритмом подальших дій у разі настання ДТП.
            </ItemText>
          </Item>
          <Item>
            <Icon
              iconName="icon-microscope"
              width="40px"
              height="40px"
              stroke="#fe9901"
              fill="#fe9901"
            />
            <ItemName>Оцінка</ItemName>
            <ItemText>
              судової перспективи оскарження постанови про адміністративне
              правопорушення.
            </ItemText>
          </Item>
          <Item>
            <Icon
              iconName="icon-scales"
              width="40px"
              height="40px"
              stroke="#fe9901"
              fill="#fe9901"
            />
            <ItemName>Оскарження</ItemName>
            <ItemText>
              необмеженої кількості незаконних постанов у судах першої та
              апеляційної інстанції, винесених після вступу у Клуб.
            </ItemText>
          </Item>
        </ServiceList>
        <SubTitle>Підготовка усіх документів до суду Першої інстанції</SubTitle>
        <ServiceList>
          <Item2>
            <Icon iconName="icon-scales-feather" width="40px" height="40px" />
            <ItemName>Позовна заява</ItemName>
          </Item2>
          <Item2>
            <Icon iconName="icon-document" width="40px" height="40px" />
            <ItemName>Відповідь на відзив</ItemName>
          </Item2>
          <Item2>
            <Icon iconName="icon-policeman" width="40px" height="40px" />
            <ItemName>
              Клопотання до поліції про зупинку виконання постанови
            </ItemName>
          </Item2>
          <Item2>
            <Icon iconName="icon-suitcase" width="40px" height="40px" />
            <ItemName>
              Заява про розгляд справи без участі позивача (за необхідності)
            </ItemName>
          </Item2>
        </ServiceList>
        <SubTitle>
          Підготовка необхідних документів до суду Апеляційної інстанції
        </SubTitle>
        <BlockOfComplaints>
          <Block>
            <BlockName>
              У разі відмови у задоволенні вимог позовної заяви судом першої
              інстанції :
            </BlockName>
            <BlockList>
              <BlockItem>
                <Icon iconName="icon-document2" width="40px" height="40px" />
                <p>Апеляційна скарга</p>
              </BlockItem>
              <BlockItem>
                <Icon iconName="icon-document" width="40px" height="40px" />
                <p>Відповідь на відзив на апеляційну скаргу</p>
              </BlockItem>
            </BlockList>
          </Block>
          <Block>
            <BlockName>
              У разі подання апеляційної скарги поліцією у звʼязку з незгодою із
              задоволенням вимог позовної заяви судом першої інстанції :
            </BlockName>
            <BlockList>
              <BlockItem>
                <Icon iconName="icon-folder" width="40px" height="40px" />
                <p>Відзив на апеляційну скаргу</p>
              </BlockItem>
              <BlockItem>
                <Icon iconName="icon-document" width="40px" height="40px" />
                <p>
                  Заява про розгляд справи без участі позивача (за
                  необхідності).
                </p>
              </BlockItem>
            </BlockList>
          </Block>
        </BlockOfComplaints>

        <SubTitle>Підготовка інших процесуальних документів</SubTitle>
        <ListOfDocs>
          <Item2>
            <Icon iconName="icon-scales-feather" width="40px" height="40px" />
            <ItemName2>Заяви про повернення </ItemName2>
            <p>судового збору</p>
          </Item2>
          <Item2>
            <Icon iconName="icon-document" width="40px" height="40px" />
            <ItemName2>Позовна заява</ItemName2>
            <p>
              про компенсацію моральної шкоди у разі задоволення позовних вимог
              про скасування незаконної постанови (за бажання учасника Клубу)
            </p>
          </Item2>
          <Item2>
            <Icon iconName="icon-moneyBag" width="40px" height="40px" />
            <ItemName2>Заяви про виконання рішення суду</ItemName2>
            <p>
              щодо компенсації моральної шкоди (фактичного стягнення коштів).
            </p>
          </Item2>
          <Item2>
            <Icon iconName="icon-infinity" width="40px" height="40px" />
            <ItemName2>Необмеженої кількості скарг</ItemName2>
            <p>на незаконні дії працівників поліції</p>
          </Item2>
        </ListOfDocs>
        <DiscountNotice>
          Окрім того, учасники отримують знижку у розмірі 10% на продовження
          пакета «Стандарт на рік» та пакета «Сімейний стандарт» на наступний
          рік.
          <p>
            <span>При вступі в Клуб учасники отримують:</span> номерну карту
            учасника Клубу, монографію, наліпки на авто та ароматизатор.
          </p>
        </DiscountNotice>
      </Container>
    </>
  );
};

export default ServicesPage;
