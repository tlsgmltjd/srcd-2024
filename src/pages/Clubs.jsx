import styled from "styled-components";
import LeftArrowIconBlack from "../assets/LeftArrowIconBlack";

function Clubs() {
  return (
    <ClubContainer>
      <ClubTitleBox></ClubTitleBox>
      <ClubBox>
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
  padding: 0 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(450px, 1fr));
`;

const ClubBox = styled.div`
  background-color: red;
`;

const ClubConentBox = styled.div``;

const ClubContentTitleBox = styled.div``;

const ClubContentTitle = styled.h1``;

const ClubContent = styled.p``;

const ClubBottomBox = styled.div``;

const ClubTitleBox = styled.div`
  background-color: #0d00ff;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;
