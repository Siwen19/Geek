import styled from "styled-components";

export const Wrap = styled.div `
  padding: 24px 15px 20px;
`;

export const Content = styled.div `
  width: 100%;
  margin-top: 4px;
  overflow: hidden;
  & > ul {
    margin-bottom: -16px;
    padding: 16px 0;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden; 
} 
`;  