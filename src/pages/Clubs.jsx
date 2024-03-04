import styled from "styled-components";
import LeftArrowIconBlack from "../assets/LeftArrowIconBlack";
import Vfriends from "../assets/clubs/Vfriends";

function Clubs() {
  return (
    <ClubContainer>
      <ClubTitleBox></ClubTitleBox>
      <ClubBox>
        <ClubLogoBox>
          <Vfriends />
        </ClubLogoBox>
        <ClubConentBox>
          <ClubContentTitleBox>
            <ClubContentTitle>v.friends</ClubContentTitle>
            <ClubContent>디자인 교육 봉사 동아리</ClubContent>
          </ClubContentTitleBox>
          <ClubContent>콘텐츠디자인과</ClubContent>
        </ClubConentBox>
        <ClubBottomBox>
          <LeftArrowIconBlack />
        </ClubBottomBox>
      </ClubBox>
    </ClubContainer>
  );
}

export default Clubs;

const ClubContainer = styled.main`
  padding: 0 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const ClubBox = styled.div`
  background-color: white;
`;

const ClubLogoBox = styled.div`
  background: #f9f9f9;
  padding: 50px;
  width: 100%;
  height: 357.647px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClubConentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const ClubContentTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ClubContentTitle = styled.h1`
  color: #000;
  font-size: 30px;
  font-weight: 700;
`;

const ClubContent = styled.p`
  color: #a0a19e;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
`;

const ClubBottomBox = styled.div`
  border-bottom: 2px solid black;
  display: flex;
  justify-content: end;
  padding: 15px 0;
`;

const ClubTitleBox = styled.div`
  background-color: #0d00ff;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;
