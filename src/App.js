import { Fragment } from "react";
import styled from "styled-components";

import "./App.css";
import originalImageData from "./data.json";
import { search } from "./utils/search";
import images from "./images";
import { useEffect, useState } from "react";
import { ImageGallery } from "./components/ImageGallery";
import { SimilarImages } from "./components/SimilarImages";
import { normaliseData } from "./utils/normaliseData";

const StyledImage = styled.img`
  display: inherit;
  width: 400px;
  margin: 10px auto;
`;

const StyledWrapperDiv = styled.div`
  width: 100%;
  margin: auto;
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: black;
  color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

const App = () => {
  const [similarImages, setSimilarImages] = useState([]);
  const [imageData, setImageData] = useState([]);
  const [compareImage, setCompareImage] = useState();
  const [showGallery, setShowGallery] = useState(true);

  useEffect(() => {
    const normalisedData = normaliseData(originalImageData);
    setImageData(normalisedData);
  }, []);

  const setChosenImage = (imageId) => {
    const imageNumber = imageId.replace(".jpg", "");
    setCompareImage(imageNumber);
    setShowGallery(false);
    setSimilarImages(search(imageId, imageData));
  };

  const showGalleryView = () => {
    setShowGallery(true);
  };

  return (
    <div className="App">
      <h1>Image Similarity Task</h1>

      {showGallery && (
        <Fragment>
          {" "}
          <p>Choose an image to find other similar ones</p>{" "}
          <ImageGallery images={imageData} setChosenImage={setChosenImage} />
        </Fragment>
      )}
      {!showGallery && (
        <Fragment>
          <StyledWrapperDiv>
            <StyledImage
              src={images[compareImage - 1]}
              alt={`image${compareImage}`}
              id={`image${compareImage}`}
            />
          </StyledWrapperDiv>
          <StyledButton onClick={showGalleryView}>Back to gallery</StyledButton>
        </Fragment>
      )}

      <p>Other images like yours</p>
      <SimilarImages images={similarImages} />
    </div>
  );
};

export default App;
