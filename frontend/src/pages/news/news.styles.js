import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  width: 50%;
  margin: 10rem;

  @media (min-width: 800px) {
    margin: 20rem;
    display: flex;
    max-width: 1200px;
    width: 100%;
    text-align: center;
  }
`;
