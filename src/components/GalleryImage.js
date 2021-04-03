import styled from "styled-components";

import images from "../images";

const StyledWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin: 2px;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const GalleryImage = ({ name, setChosenImage }) => {
  const handleClick = (e) => {
    setChosenImage(e.target.id);
  };
  const imageNumber = name.replace(".jpg", "");
  return (
    <StyledWrapper
      id={name}
      image={images[imageNumber - 1]}
      onClick={handleClick}
    />
  );
};
