import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import {
  StyledCarrocelContainer,
  StyledImageContainer,
  StyledArrowContainer,
  StyledImage,
} from "../../assets/style/StyleSlideShow";

import fome1 from "../../assets/img/fome1.jpg";
import fome2 from "../../assets/img/fome2.jpg";
import fome3 from "../../assets/img/fome3.jpg";

const imagens = [fome1, fome2, fome3];

const SlideShow = () => {
  const [mudarImageIndex, setMudarImageIndex] = useState(0);

  const nextImage = () => {
    setMudarImageIndex((primeiroIndex) => primeiroIndex + 1);
  };

  const preImage = () => {
    setMudarImageIndex((primeiroIndex) => primeiroIndex - 1);
  };

  return (
    <StyledCarrocelContainer>
      {mudarImageIndex !== 0 && (
        <StyledArrowContainer onClick={preImage}>
          <MdKeyboardArrowLeft />
        </StyledArrowContainer>
      )}
      <StyledImageContainer>
        <StyledImage src={imagens[mudarImageIndex]} />
      </StyledImageContainer>
      {mudarImageIndex !== imagens.length - 1 && (
        <StyledArrowContainer onClick={nextImage}>
          <MdKeyboardArrowRight />
        </StyledArrowContainer>
      )}
    </StyledCarrocelContainer>
  );
};
export default SlideShow;
