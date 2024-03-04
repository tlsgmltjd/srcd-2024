import styled from "styled-components";
import Logo from "../assets/Logo";
import InstarIcon from "../assets/InstarIcon";
import FacebockIcon from "../assets/FacebockIcon";

function Footer() {
  return (
    <FooterContainer>
      <FooterInfoBox>
        <Logo />
        <FooterInfoContentBox>
          <FooterInfoContent>
            선린인터넷고등학교 콘텐츠디자인과
          </FooterInfoContent>
          <FooterInfoContent>
            서울특별시 용산구 원효로97길 33-4 3호관 2층
          </FooterInfoContent>
          <FooterInfoContent>
            © 2024. sunrin contents. all rights reserved.
          </FooterInfoContent>
        </FooterInfoContentBox>
      </FooterInfoBox>
      <FooterSnsBox>
        시연회
        <FooterSnsBtn href="https://www.google.com">
          <InstarIcon />
        </FooterSnsBtn>
        <FooterSnsBtn href="https://www.google.com">
          <FacebockIcon />
        </FooterSnsBtn>
      </FooterSnsBox>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 200px;
  width: 100%;
`;

const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FooterInfoContentBox = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FooterInfoContent = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const FooterSnsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 14px;
`;

const FooterSnsBtn = styled.a`
  cursor: pointer;
`;
