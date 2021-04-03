import { GalleryImage } from "./GalleryImage";
import styled from "styled-components";

const ImageGalleryWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export const ImageGallery = ({ images, setChosenImage }) => {
  return (
    <ImageGalleryWrapper>
      {images.map(({ name }) => {
        return (
          <GalleryImage
            name={name}
            key={name}
            setChosenImage={setChosenImage}
          />
        );
      })}
    </ImageGalleryWrapper>
  );
};
