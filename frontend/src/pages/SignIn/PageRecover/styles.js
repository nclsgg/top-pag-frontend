import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '../../../styles/global';

export const Container1 = styled.div`
  font-family: Ubuntu;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f6fa;
  max-height: 100%;
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
  overflow: hidden;

  form {
    display: flex;
    flex-direction: column;

    @media (max-width: 1024px) {
      align-items: center;
    }

    @media (max-width: 768px) {
      align-items: center;
    }

    @media (max-width: 568px) {
      align-items: center;
    }

    @media (max-width: 360px) {
      align-items: center;
    }

    input {
      ::placeholder {
        color: #c4c4c4;
      }
      font-size: 15px;
      background: #ffffff;
      box-shadow: 0px 10px 20px rgba(180, 185, 207, 0.2);
      border: none;
      border-radius: 7px;
      height: 60px;
      width: 498px;
      text-indent: 15px;
      margin-bottom: 20px;

      @media (max-width: 1024px) {
        width: 700px;
        height: 70px;
      }

      @media (max-width: 768px) {
        width: 500px;
        height: 50px;
      }

      @media (max-width: 568px) {
        width: 330px;
        height: 50px;
      }

      @media (max-width: 360px) {
        width: 330px;
        height: 50px;
      }
    }

    span {
      color: #fc0303;
    }
  }
`;
export const FooterForm = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: row;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 568px) {
    flex-direction: column;
  }

  @media (max-width: 360px) {
    flex-direction: column;
  }

  button {
    font-weight: bold;
    font-size: 15px;
    color: #ffff;
    letter-spacing: 0.15em;
    width: 150px;
    height: 54px;
    background: ${colors.Orange};
    border-radius: 7px;
    border: none;

    &:hover {
      background: ${darken(0.03, colors.Orange)};
    }

    @media (max-width: 1024px) {
      margin-top: 10px;
      width: 200px;
    }

    @media (max-width: 768px) {
      margin-top: 30px;
      width: 330px;
    }

    @media (max-width: 568px) {
      margin-top: 10px;
      width: 330px;
    }

    @media (max-width: 360px) {
      margin-top: 10px;
      width: 330px;
    }
  }

  a {
    text-decoration: none;
    color: ${colors.Orange};
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }

    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }
`;

export const Logo = styled.img`
  width: 167px;
  margin-bottom: 60px;
`;
