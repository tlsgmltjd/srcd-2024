import styled from "styled-components";
import LeftArrowIconBlack from "../assets/LeftArrowIconBlack";

import Vfriends from "../assets/clubs/Vfriends.svg";
import Mir from "../assets/clubs/Mir.svg";
import Aune from "../assets/clubs/Aune.svg";
import Tate from "../assets/clubs/Tate.svg";
import Creal from "../assets/clubs/Creal.svg";
import Tapie from "../assets/clubs/Tapie.svg";
import Januri from "../assets/clubs/Januri.svg";


function Clubs() {
  return (
    <Container>
      <ClubContainerTitleBox>
        <ClubContainerTitle>동아리 목록</ClubContainerTitle>
      </ClubContainerTitleBox>
      <ClubContainer>
        <ClubTitleBox>
          <ClubTitle>시연회에 함께한 동아리들을 알아보세요!</ClubTitle>
        </ClubTitleBox>
        <ClubBox>
          <ClubLogoBox>
            <img src={Vfriends} />
          </ClubLogoBox>
          <ClubConentBox>
            <ClubContentTitleBox>
              <ClubContentTitle>v.friends</ClubContentTitle>
              <ClubContent>디자인 교육 봉사 동아리</ClubContent>
            </ClubContentTitleBox>
            <ClubContent>콘텐츠디자인과</ClubContent>
          </ClubConentBox>
          <ClubBottomBox>
            <ClubInfoBtn>
              <LeftArrowIconBlack />
            </ClubInfoBtn>
          </ClubBottomBox>
        </ClubBox>
        <ClubBox>
          <ClubLogoBox>
            <img src={Mir} />
          </ClubLogoBox>
          <ClubConentBox>
            <ClubContentTitleBox>
              <ClubContentTitle>MIR</ClubContentTitle>
              <ClubContent>만화·일러스트레이션 동아리</ClubContent>
            </ClubContentTitleBox>
            <ClubContent>콘텐츠디자인과</ClubContent>
          </ClubConentBox>
          <ClubBottomBox>
            <ClubInfoBtn>
              <LeftArrowIconBlack />
            </ClubInfoBtn>
          </ClubBottomBox>
        </ClubBox>
        <ClubBox>
          <ClubLogoBox>
            <img src={Aune} />
          </ClubLogoBox>
          <ClubConentBox>
            <ClubContentTitleBox>
              <ClubContentTitle>아우내</ClubContentTitle>
              <ClubContent>영상·영화 전공 동아리</ClubContent>
            </ClubContentTitleBox>
            <ClubContent>콘텐츠디자인과</ClubContent>
          </ClubConentBox>
          <ClubBottomBox>
            <ClubInfoBtn>
              <LeftArrowIconBlack />
            </ClubInfoBtn>
          </ClubBottomBox>
        </ClubBox>
        <ClubBox>
          <ClubLogoBox>
            <img src={Tate} />
          </ClubLogoBox>
          <ClubConentBox>
            <ClubContentTitleBox>
              <ClubContentTitle>TATE</ClubContentTitle>
              <ClubContent>디자인 연구 동아리</ClubContent>
            </ClubContentTitleBox>
            <ClubContent>콘텐츠디자인과</ClubContent>
          </ClubConentBox>
          <ClubBottomBox>
            <ClubInfoBtn>
              <LeftArrowIconBlack />
            </ClubInfoBtn>
          </ClubBottomBox>
        </ClubBox>
        <ClubBox>
          <ClubLogoBox>
            <img src={Creal} />
          </ClubLogoBox>
          <ClubConentBox>
            <ClubContentTitleBox>
              <ClubContentTitle>C,real</ClubContentTitle>
              <ClubContent>게임 개발 연구 동아리</ClubContent>
            </ClubContentTitleBox>
            <ClubContent>콘텐츠디자인과</ClubContent>
          </ClubConentBox>
          <ClubBottomBox>
            <ClubInfoBtn>
              <LeftArrowIconBlack />
            </ClubInfoBtn>
          </ClubBottomBox>
        </ClubBox>
        <ClubBox>
          <ClubLogoBox>
            <img src={Tapie} />
          </ClubLogoBox>
          <ClubConentBox>
            <ClubContentTitleBox>
              <ClubContentTitle>TAPIE</ClubContentTitle>
              <ClubContent>앱·웹 개발 연구 동아리</ClubContent>
            </ClubContentTitleBox>
            <ClubContent>소프트웨어과</ClubContent>
          </ClubConentBox>
          <ClubBottomBox>
            <ClubInfoBtn>
              <LeftArrowIconBlack />
            </ClubInfoBtn>
          </ClubBottomBox>
        </ClubBox>
        <ClubBox>
          <ClubLogoBox>
            <img src={Januri} />
          </ClubLogoBox>
          <ClubConentBox>
            <ClubContentTitleBox>
              <ClubContentTitle>자의누리</ClubContentTitle>
              <ClubContent>모션그래픽 전문 동아리</ClubContent>
            </ClubContentTitleBox>
            <ClubContent>콘텐츠디자인과</ClubContent>
          </ClubConentBox>
          <ClubBottomBox>
            <ClubInfoBtn>
              <LeftArrowIconBlack />
            </ClubInfoBtn>
          </ClubBottomBox>
        </ClubBox>
      </ClubContainer>
    </Container>
  );
}

export default Clubs;


const ClubImage = styled.image`
  width: 122px;
`
const Container = styled.div`
  padding: 150px 200px 150px 200px;

  @media screen and (max-width: 1350px) {
    padding: 60px 50px 100px 50px;
  }
`;

const ClubContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 76px 55px;

  @media screen and (max-width: 1350px) {
    gap: 76px 30px;
  }
`;

const ClubBox = styled.div`
  background-color: white;
`;

const ClubLogoBox = styled.div`
  background: #f9f9f9;
  width: 100%;
  height: 244.263px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClubConentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 40px;
`;

const ClubContentTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ClubContentTitle = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;
const ClubContentTitle2 = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

const ClubContent = styled.p`
  color: #a0a19e;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

const ClubBottomBox = styled.div`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: end;
  padding: 13px 0;
`;

const ClubInfoBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;

const ClubTitleBox = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  position: relative;
`;

const ClubTitle = styled.text`
  position: absolute;
  bottom: 0;
  z-index: -1;
  left: 0;
  font-size: 16px;
  font-weight: 500;
`;

const ClubContainerTitleBox = styled.div`
  text-align: left;
  width: 100%;
  border-top: 1px solid black;
`;

const ClubContainerTitle = styled.h1`
  text-align: center;
  font-size: 35px;
  font-weight: 600;
  font-style: normal;
  display: flex;
  padding: 20px 0;
  font-family: Pretendard-Semibold;
`;
