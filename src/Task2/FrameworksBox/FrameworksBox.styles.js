import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100px;
  height: 32px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "red"};
`;
