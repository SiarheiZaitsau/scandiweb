import React from "react";
import styled from "styled-components";

const StyledWidthContainer = styled.div`
  max-width: 1338px;
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  margin: 0 auto;
  flex: 1;
  height: 100%;
  width: 100%;
  padding: ${(props) => props.padding || "0px 101px"}; ;
`;

const WidthContainer = (props) => {
  return <StyledWidthContainer {...props} />;
};
export default WidthContainer;
