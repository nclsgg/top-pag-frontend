import styled from 'styled-components';
import { colors } from '../../styles/global';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: ${colors.Background};
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    overflow: scroll;
    min-height: 100%;
  }
`;
