import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/Logo";
import LeftArrowIcon from "../assets/LeftArrowIcon";

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <Logo />
      </HeaderTitle>
      <HeaderBtnBox>
        <Link to={"/"}>
          <HeaderBtn>시연회 소개</HeaderBtn>
        </Link>
        <Link to={"/clubs"}>
          <HeaderBtn>동아리 목록</HeaderBtn>
        </Link>
        <Link to={"/faq"}>
          <HeaderBtn>FAQ</HeaderBtn>
        </Link>
      </HeaderBtnBox>
      <HeaderLinkBtn>
        지원 폼 작성하기
        <LeftArrowIcon />
      </HeaderLinkBtn>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 30px 0;
`;

const HeaderTitle = styled.h1``;

const HeaderBtnBox = styled.div``;

const HeaderBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
`;

const HeaderLinkBtn = styled.button`
  background: #000;
  color: white;
  padding: 8px 12px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  cursor: pointer;
`;
