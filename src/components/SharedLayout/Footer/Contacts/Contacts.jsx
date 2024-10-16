import { SubTitle } from "../Footer.styled";
import {
  CircleBox,
  ContactItem,
  ContactLink,
  ContactsBlock,
  ContactsList,
  IpnIcon,
  LocationIcon,
  MailIcon,
  PersonIcon,
  PhoneIcon,
} from "./Contacts.styled";

const Contacts = () => {
  return (
    <>
      <ContactsBlock>
        <SubTitle>Контакти</SubTitle>
        <ContactsList>
          <ContactItem>
            <CircleBox>
              <PersonIcon />
            </CircleBox>
            <p>ФОП Бурмака Дмитро Павлович</p>
          </ContactItem>
          <ContactItem>
            <CircleBox>
              <IpnIcon />
            </CircleBox>
            <p>ІПН: 2979910292</p>
          </ContactItem>
          <ContactItem>
            <CircleBox>
              <LocationIcon />
            </CircleBox>
            <div>
              <p style={{ marginBottom: "10px" }}>
                Юридична адреса: м. Полтава, вул. Героїв АТО 79, кв. 27
              </p>
              <p>Фактична адреса: м. Полтава, вул. Героїв АТО 71А, каб. 324</p>
            </div>
          </ContactItem>
          <ContactItem>
            <CircleBox>
              <PhoneIcon />
            </CircleBox>
            <ContactLink href="tel:+380509705754">
              +38 050 97 057 54
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <CircleBox>
              <MailIcon />
            </CircleBox>
            <ContactLink href="mailto:klubad2021@gmail.com">
              klubad2021@gmail.com
            </ContactLink>
          </ContactItem>
        </ContactsList>
      </ContactsBlock>
    </>
  );
};

export default Contacts;
