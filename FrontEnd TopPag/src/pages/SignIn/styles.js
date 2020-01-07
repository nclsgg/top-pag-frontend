import styled from 'styled-components';
import { darken } from 'polished';
import background from '../../assets/backgroundlogin.png';
import backgroundmobile from '../../assets/backgroundmobile.png';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: static;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 360px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 568px) {
    flex-direction: column-reverse;
  }
`;

export const Container1 = styled.div`
  font-family: Ubuntu;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f6fa;
  max-height: 100%;
  min-height: 100%;
  min-width: 55%;
  max-width: 55%;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 60%;
    max-height: 60%;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 70%;
    max-height: 70%;
  }

  @media (max-width: 568px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 70%;
    max-height: 70%;
  }

  @media (max-width: 360px) {
    min-width: 100%;
    max-width: 100%;
    min-height: 60%;
    max-height: 60%;
  }

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
    background: #d97035;
    border-radius: 7px;
    border: none;

    &:hover {
      background: ${darken(0.03, '#d97035')};
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

  p {
    font-size: 15px;

    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }

  a {
    text-decoration: none;
    color: #d97035;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }

    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }
`;

export const Container2 = styled.div`
  font-family: Ubuntu;
  background: url(${background});

  background-repeat: no-repeat;
  background-size: 100% 100%;
  max-width: 45%;
  min-width: 45%;

  @media (max-width: 1024px) {
    background: linear-gradient(rgba(37, 57, 88, 0.5), rgba(37, 57, 88, 0.5)),
      url(${backgroundmobile});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    max-width: 100%;
    min-width: 100%;
    max-height: 40%;
    min-height: 40%;
  }

  @media (max-width: 768px) {
    background: linear-gradient(rgba(37, 57, 88, 0.5), rgba(37, 57, 88, 0.5)),
      url(${backgroundmobile});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    max-width: 100%;
    min-width: 100%;
    max-height: 40%;
    min-height: 40%;
  }

  @media (max-width: 568px) {
    background: linear-gradient(rgba(37, 57, 88, 0.5), rgba(37, 57, 88, 0.5)),
      url(${backgroundmobile});
    background-repeat: no-repeat;
    background-size: 100%;
    max-width: 100%;
    min-width: 100%;
    max-height: 35%;
    min-height: 35%;
  }

  @media (max-width: 360px) {
    background: linear-gradient(rgba(37, 57, 88, 0.5), rgba(37, 57, 88, 0.5)),
      url(${backgroundmobile});
    background-repeat: no-repeat;
    background-size: 100%;
    max-width: 100%;
    min-width: 100%;
    max-height: 40%;
    min-height: 40%;
  }

  #container {
    margin-top: 600px;
    align-items: center;
    margin-left: 100px;

    @media (max-width: 1600px) {
      margin-top: 500px;
    }

    @media (max-width: 1024px) {
      margin-left: 130px;
      margin-top: 130px;
    }

    @media (max-width: 768px) {
      margin-top: 100px;
    }

    @media (max-width: 568px) {
      margin-left: 65px;
      margin-top: 20px;
    }

    @media (max-width: 360px) {
      margin-left: 40px;
      margin-top: 40px;
    }

    #h1 {
      letter-spacing: 0.15em;
      font-size: 17px;
      width: 425px;

      @media (max-width: 1024px) {
        font-size: 17px;
        width: 350px;
      }

      @media (max-width: 768px) {
        font-size: 13px;
        width: 270px;
      }

      @media (max-width: 568px) {
        font-size: 13px;
        width: 270px;
      }

      @media (max-width: 360px) {
        width: 240px;
        font-size: 10px;
      }

      h1 {
        color: #ffffff;
      }
    }

    #p {
      margin-top: 10px;

      p {
        color: #ffffff;
        font-size: 18px;
        width: 423px;

        @media (max-width: 1024px) {
          font-size: 20px;
          width: 350px;
        }

        @media (max-width: 768px) {
          font-size: 12px;
          width: 200px;
        }

        @media (max-width: 568px) {
          font-size: 12px;
          width: 200px;
        }

        @media (max-width: 360px) {
          font-size: 10px;
          width: 170px;
        }
      }
      button {
        font-weight: bold;
        letter-spacing: 0.15em;
        margin-top: 50px;
        width: 300px;
        height: 60px;
        background: #d97035;
        border-radius: 7px;
        color: #ffffff;
        border: none;

        &:hover {
          background: ${darken(0.03, '#d97035')};
        }

        @media (max-width: 1024px) {
          width: 350px;
          margin-top: 35px;
        }

        @media (max-width: 768px) {
          width: 360px;
          margin-top: 35px;
        }

        @media (max-width: 568px) {
          width: 270px;
          margin-top: 35px;
        }

        @media (max-width: 360px) {
          width: 235px;
          margin-top: 35px;
        }
      }
    }
  }
`;

export const Logo = styled.img`
  width: 167px;
  margin-bottom: 60px;
  margin-top: 25%;

  @media (max-width: 568px) {
    margin-top: 60px;
    margin-bottom: 20px;
  }

  @media (max-width: 360px) {
    margin-top: 25px;
    margin-bottom: 20px;
  }
`;
