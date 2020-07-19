import styled from 'styled-components';
import { RootColors, RootColorGradients } from '../colors';

export const Button = styled.div<{ dark?: boolean }>`
  width: 200px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${RootColorGradients.dark};
  color: ${RootColors.light};
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 5px 5px 20px rgba(43, 43, 63, 0.2);
  transition: transform 150ms ease-in-out, box-shadow 150ms ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 5px 5px 20px rgba(43, 43, 63, 0.15);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 5px 5px 20px rgba(43, 43, 63, 0.3);
  }
`;
