import styled from "styled-components";

function Clubs() {
  return <ClubContainer></ClubContainer>;
}

export default Clubs;

const ClubContainer = styled.main`
  padding: 0 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(450px, 1fr));
`;

const ClubBox = styled.div``;
