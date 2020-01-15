import styled from 'styled-components';
import { colors } from '../../../styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #f5f6fa;
`;

export const Logo = styled.img`
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoM = styled.img`
  display: none;
  width: 167px;
  height: 98px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const Line = styled.div`
  background: #e5e5e5;
  width: 3px;
  height: 86px;
  margin-left: 17.5px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Navigator = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 50px;
  align-items: left;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin-top: 0px;
    margin-left: 0px;
    align-items: center;
    justify-content: center;
  }

  #navDraw {
    flex-direction: row;
  }

  #nav {
    display: flex;

    p {
      color: ${colors.Orange};
      font-size: 18px;
      margin-left: 10px;
    }

    .step {
      display: flex;
      align-items: center;

      @media (max-width: 1024px) {
        margin-top: 50px;
      }

      img {
        @media (max-width: 1024px) {
          width: 28px;
          height: 28px;
        }
      }

      p {
        width: 125px;
        @media (max-width: 1024px) {
          width: 130px;
        }
      }
    }

    .step2 {
      display: flex;

      align-items: center;

      @media (max-width: 1024px) {
        display: none;
      }
      p {
        color: ${colors.Grey};
        width: 135px;
      }
    }
  }
`;

export const Circle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 3px solid ${colors.Grey};
  border-radius: 100px;

  span {
    color: ${colors.Grey};
    font-weight: 500;
    font-size: 1.4rem;
  }

  &&.active {
    border-color: ${colors.Orange};

    span {
      color: ${colors.Orange};
    }
  }
`;
