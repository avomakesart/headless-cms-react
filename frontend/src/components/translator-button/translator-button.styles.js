import styled from 'styled-components';

/**
 * Base Dropdown - styles
 */

export const ButtonsContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  margin: 0 1rem 1rem 1rem;
`;

export const Button = styled.button`
  color: black;
  text-decoration: none;
  cursor: pointer;
  background: transparent;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
  margin-top: 1rem;
`;

export const Dropdown = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 1px solid black;
  left: -1rem;
  overflow: hidden;
  z-index: 14;
  margin: 0 3rem;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
`;

export const DropdownOpen = styled.button`
  background: transparent;
  border-radius: 2px;
  border: 1px solid black;
  left: -1rem;
  overflow: hidden;
  z-index: 14;
  margin: -7rem 2.2rem;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1rem;
`;

export const StyledCriteria = styled.span`
  display: inline-block;
  max-width: 9.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: bottom;
  white-space: nowrap;
`;
