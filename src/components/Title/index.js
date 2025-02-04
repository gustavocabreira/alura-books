import styled from "styled-components";

export const Title = styled.h2`
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "24px"};
  text-align: ${(props) => props.textAlign || "left"};
  width: 100%;
  text-transform: uppercase;
  margin: 0;
  padding: 30px 0;
`