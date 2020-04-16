import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const WorkContainer = styled.div`
    display: flex,
    max-width: 1200px,
    width: 100%;
`;

export const WorkHeader = styled.div`
  background: white;
  margin: 7rem;
`;

export const WorkValue = styled.p`
  font-size: 14px;
  color: black;
  display: inline-block;
  margin-left: 1rem;
  margin-top: 6rem;
`;

export const WorkDash = styled.hr`
  height: 0;
  width: 2rem;
  display: inline-block;
  vertical-align: middle;
  border-top: 0.2rem solid;
  position: relative;
`;

export const WorkTitle = styled.h2`
  color: black;
  font-size: 30px;
  margin-left: 1rem;
`;

export const WorkNav = styled.nav`
  flex-direction: column;
  display: flex;
  @media (min-width: 768px) {
    max-width: 90rem;
    display: flex;
    margin-top: 2rem;
    flex-direction: row;
  }
`;

export const WorkLink = styled(NavLink)`
  color: black;
  margin-left: 3rem;
  text-decoration: none;
  &:focus {
    border-bottom: 1px solid black;
    transition: 0.2s;
  }
  &:hover {
    border-bottom: 1px solid black;
    transition: 0.2s;
  }
`;

// All Work

export const AllWorkContainer = styled.div`
    display: flex,
    max-width: 1200px,
    width: 100%;
`;

export const AllWorkSection = styled.div`
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    margin: 8rem auto;
    flex-direction: row;
  }
`;

export const AllWorkInfo = styled.div`
  text-align: center;
  margin: 0 5rem;
`;

export const AllWorkH3 = styled.h3`
  font-size: 18px;
  text-align: left;
`;
