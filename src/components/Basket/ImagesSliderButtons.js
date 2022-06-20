import React, { Component } from "react";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../images/Next.svg";
const StyledButtonsContainer = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

const StyledImagesSliderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #000000;
  opacity: 0.73;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  cursor: pointer;
  &:first-child {
    margin-right: 8px;
  }
  &:hover {
    opacity: 0.5;
  }
`;
export default class ImagesSliderButton extends Component {
  render() {
    const { changeImage } = this.props;
    return (
      <StyledButtonsContainer>
        <StyledImagesSliderButton onClick={() => changeImage("prev")}>
          <ArrowIcon style={{ transform: "rotate(-180deg)" }} />
        </StyledImagesSliderButton>
        <StyledImagesSliderButton onClick={() => changeImage("next")}>
          <ArrowIcon />
        </StyledImagesSliderButton>
      </StyledButtonsContainer>
    );
  }
}
