import styled from 'styled-components';
import { colors } from '../../../styles/global';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${colors.Orange};
    font-size: 32px;
    line-height: 37px;
    font-weight: normal;
  }
`;

export const Profile = styled.div`
  position: fixed;
  right: 30px;

  #profileDisplay {
    display: flex;
    display: flex;
    align-items: center;

    a {
      color: ${colors.Grey};
      margin-right: 5px;
      font-size: 12px;
      font-weight: bold;
    }
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const Movement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderMov = styled.div`
  min-width: 1000px;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 12px;
    line-height: 14px;
    font-weight: bold;
  }

  #filter {
  }
`;

export const Avatar = styled.img`
  max-width: 45px;
  max-height: 45px;
  border-radius: 100%;

  &:hover {
    cursor: pointer;
  }
`;
