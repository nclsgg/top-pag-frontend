import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '../../../styles/global';

import obrigatorio from '../../../assets/obrigatorio.png';

export const Wrapper = styled.div`
  display: flex;
  background: #f5f6fa;
  width: 100%;
  height: 100%;
  position: static;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    overflow-y: scroll;
    min-height: 160%;
  }
`;

export const Container = styled.div`
  font-family: Ubuntu;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-height: 100%;
  min-height: 100%;
  min-width: 100%;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 1024px) {
    align-items: center;
  }

  #formDiv {
    display: flex;
    flex-direction: row;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  #error {
    display: flex;
    flex-direction: column;
    align-items: left;

    span {
      color: #ad1d00;
      margin-top: -20px;
      margin-bottom: 20px;
      margin-left: 25px;

      @media (max-width: 1024px) {
        margin-left: 0px;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    @media (max-width: 1024px) {
      align-items: center;
    }

    @media (max-width: 1024px) {
      align-items: center;
      margin-left: 0px;
    }

    #formCPF {
      input {
        min-width: 98%;

        @media (max-width: 1024px) {
          min-width: 96%;
        }

        @media (max-width: 568px) {
          width: 330px;
        }
      }
    }

    input {
      ::placeholder {
        color: #c4c4c4;
      }
      font-size: 15px;
      background: url(${obrigatorio}) no-repeat #ffffff;
      background-position: right 15px center;

      box-shadow: 0px 10px 20px rgba(180, 185, 207, 0.2);
      border: none;
      border-radius: 7px;
      height: 60px;
      width: 498px;
      text-indent: 15px;
      margin-bottom: 20px;
      margin-left: 20px;
      @media (max-width: 1024px) {
        width: 700px;
        height: 70px;
      }

      @media (max-width: 1024px) {
        width: 500px;
        height: 50px;
        margin-left: 0px;
      }

      @media (max-width: 568px) {
        width: 330px;
        height: 50px;
        margin-left: 0px;
      }
    }
  }
  #login {
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;

    p {
      font-size: 12px;
      color: #6b6e70;
    }

    a {
      text-decoration: none;
      margin-left: 5px;
      font-size: 12px;
      color: ${colors.Orange};
    }
  }
`;
export const FooterForm = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #c4c4c4;

  @media (max-width: 1024px) {
    flex-direction: row;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  button {
    font-weight: bold;
    font-size: 15px;
    color: #ffff;
    letter-spacing: 0.15em;
    width: 250px;
    height: 54px;
    background: ${colors.Orange};
    border-radius: 7px;
    border: none;
    margin-bottom: 40px;

    &:hover {
      background: ${darken(0.03, colors.Orange)};
    }

    @media (max-width: 1024px) {
      width: 200px;
    }

    @media (max-width: 1024px) {
      margin-bottom: 10px;
      width: 330px;
    }
  }

  p {
    margin-left: 20px;
    color: #c4c4c4;
    margin-bottom: 40px;

    @media (max-width: 1024px) {
      margin-left: 0px;
      margin-bottom: 10px;
    }
  }

  #termo {
    margin-top: 10px;
    margin-bottom: 40px;
    margin-left: 200px;
    align-items: center;

    @media (max-width: 1024px) {
      margin-left: 0px;
      margin-bottom: 0px;
    }

    input[type='checkbox'] {
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }

    i {
      font-style: normal;
      color: ${colors.Grey};
    }
  }
`;

export const Formulario = styled.div`
  align-items: left;
  justify-content: left;
  margin-left: 200px;

  @media (max-width: 1600px) {
    margin-left: 100px;
  }

  @media (max-width: 1024px) {
    margin-left: 0px;
  }

  img {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  #title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;

    h1 {
      margin-top: 100px;
      margin-bottom: 100px;
      margin-left: 10px;
      font-size: 32px;
      line-height: 37px;
      color: ${colors.Orange};

      @media (max-width: 1024px) {
        font-size: 28px;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 0px;
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
  border: 3px solid ${colors.Orange};
  border-radius: 100px;

  span {
    color: ${colors.Orange};
    font-weight: 500;
    font-size: 1.4rem;
  }
`;
