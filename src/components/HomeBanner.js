import styled from "styled-components";

export default function HomeBanner() {
  return (
    <StyledDiv>
      <img src="../../images/gallery/fulls/04.jpg" alt="plants" />

      <div className="banner-text">
        <p>Never forget when it's time to quench your plant's thirst again</p>
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 0 auto;
  position: relative;
  img {
    height: 150px;
    width: 90vw;
    opacity: 0.7;
    object-fit: cover;
    border-radius: 7px;
  }
  .banner-text p {
    position: absolute;
    font-size: 1.8rem;
    font-style: italic;
    top: 30%;
    left: 60%;
    transform: translate(-50%, -50%);
    color: "#003829";
    background-color: "#60ffd5";
  }
`;
