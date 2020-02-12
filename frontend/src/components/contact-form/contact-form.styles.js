import styled from "styled-components";

export const Form = styled.form`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 800px) {
    width: 50%;
  }
`;

export const DisabledButton = styled.button`
  background: gray;
  color: black;
  border-color: gray;
  padding: 2rem;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 11 px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;
