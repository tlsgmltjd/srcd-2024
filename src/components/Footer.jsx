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
        <InstarIcon />
        <FacebockIcon />
      </FooterSnsBox>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer``;

const FooterInfoBox = styled.div``;

const FooterInfoContentBox = styled.p``;

const FooterInfoContent = styled.p``;

const FooterSnsBox = styled.div``;
