import styled from 'styled-components';
import { darken } from 'polished';
import seta from '../../../assets/seta.png';
import { colors, fonts } from '../../../styles/global';

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
    flex-direction: column;

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
      width: 800px;
      text-indent: 15px;
      margin-bottom: 20px;
      margin-left: 20px;

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

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: url(${seta}) no-repeat #ffffff;
      background-position: right 15px center;
      padding: 13px 20px 13px 12px;

      ::placeholder {
        color: #c4c4c4;
      }

      font-size: 15px;
      box-shadow: 0px 10px 20px rgba(180, 185, 207, 0.2);
      border-radius: 7px;
      border: none;
      height: 60px;
      width: 800px;
      text-indent: 15px;
      margin-bottom: 20px;
      margin-left: 20px;

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
      font-size: ${fonts.Default};
      color: #6b6e70;
    }

    a {
      text-decoration: none;
      margin-left: 5px;
      font-size: ${fonts.Default};
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

  #step {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1024px) {
      align-items: center;
    }
  }

  p {
    margin-left: 20px;
    color: #6b6e70;
    margin-bottom: 40px;

    @media (max-width: 1024px) {
      margin-left: 0px;
      margin-bottom: 35px;
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

export const BtnCadastro = styled.button`
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
    background: ${darken(0.03, '#d97035')};
  }

  @media (max-width: 1024px) {
    width: 200px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 10px;
    width: 330px;
  }
`;

export const BtnStep = styled.button`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: #ffff;
  letter-spacing: 0.15em;
  width: 30px;
  height: 30px;
  background: ${colors.Orange};
  border-radius: 100px;
  border: none;
  margin-bottom: 40px;
  margin-left: 5px;

  &:hover {
    background: ${darken(0.03, '#d97035')};
  }

  @media (max-width: 1024px) {
    width: 20px;
    height: 20px;
    margin-bottom: 35px;
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
