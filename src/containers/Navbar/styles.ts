import styled from 'styled-components';
import { RootColors } from '../../components/colors';

export const NavbarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 70px;
  background: ${RootColors.whiteDark};
  display: flex;
  justify-content: center;

  h4 {
    color: #000;
  }
`;
