import React, { Component } from "react";
import styled from "styled-components";
import ImageListImage from "./ImageListImage";

const StyledImagesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;
const StyledImagesListItem = styled.li`
  margin-bottom: 32px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export default class ImagesList extends Component {
  render() {
    const { gallery } = this.props;
    return (
      <StyledImagesList>
        {gallery?.map((image, index) => {
          return (
            <StyledImagesListItem key={image + index}>
              <ImageListImage
                onClick={this.props.changeMainImage}
                image={image}
              />
            </StyledImagesListItem>
          );
        })}
      </StyledImagesList>
    );
  }
}
