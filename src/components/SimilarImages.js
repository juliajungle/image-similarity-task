import { SimilarImage } from "./SimilarImage";
import styled from "styled-components";

const SimilarImagesWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export const SimilarImages = ({ images }) => {
  return (
    <SimilarImagesWrapper>
      {images.map(({ name }) => (
        <SimilarImage name={name} key={name} />
      ))}
    </SimilarImagesWrapper>
  );
};
