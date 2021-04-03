import styled from "styled-components";

import images from "../images";

const StyledWrapper = styled.div`
  width: 250px;
  height: 250px;
  margin: 5px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledImage = styled.img`
  max-width: 200px;
`;

export const SimilarImage = ({ name }) => {
  const imageNumber = name.replace(".jpg", "");
  return (
    <StyledWrapper image={images[imageNumber - 1]} id={name}>
      {/* {" "}
      <StyledImage src={images[imageNumber - 1]} id={name} /> */}
    </StyledWrapper>
  );
};
