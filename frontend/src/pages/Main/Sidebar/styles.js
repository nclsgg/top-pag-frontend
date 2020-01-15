import styled from 'styled-components';
import { colors } from '../../../styles/global';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  min-height: 100%;

  #logout {
    position: fixed;
    bottom: 20px;
    left: 50px;

    @media (max-width: 768px) {
      border-top: 1px solid #c4c4c4;
    }

    a {
      text-decoration: none;
      color: ${colors.LightGrey};
      font-size: 15px;

      &:hover {
        color: ${colors.Grey};
      }
    }
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    background: ${colors.Orange};
  }

  #profileDisplay {
    align-items: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      flex-direction: row;
    }

    a {
      color: ${colors.Grey};
      font-size: 12px;
      font-weight: bold;
      margin-top: 5px;

      @media (max-width: 768px) {
        margin-top: 0px;
        margin-left: 5px;
        font-size: 20px;
        color: #ffffff;
        margin-bottom: 40px;
        margin-top: 40px;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  background: #ffffff;

  #pages {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-top: 0px;
    }

    #indicator {
      display: none;
      position: fixed;
      right: 20px;

      @media (max-width: 768px) {
        display: block;
      }
    }

    #sections {
      align-items: center;
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        flex-direction: row;
      }

      &:hover {
        background-color: #f4f4f4f4;
        cursor: pointer;
      }

      img {
        margin-top: 20px;

        @media (max-width: 768px) {
          margin-bottom: 20px;
          margin-left: 30px;
        }
      }

      p {
        margin-top: 5px;
        color: ${colors.LightGrey};
        letter-spacing: 0.15em;
        margin-bottom: 20px;
        margin-left: 25px;
        margin-right: 25px;

        @media (max-width: 768px) {
          flex-direction: row;
          margin-left: 20px;
          margin-right: 0px;
          margin-top: 25px;
        }
      }
    }
  }
`;

export const Logo = styled.img`
  max-width: 90px;
  max-height: 90px;
  margin-bottom: 40px;
  margin-top: 20px;

  @media (max-width: 768px) {
    display: none;
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
