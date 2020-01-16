import styled from 'styled-components';
import { darken } from 'polished';
import { colors, fonts } from '../../../styles/global';

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
      font-size: ${fonts.Default};
      font-weight: bold;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  margin-top: 40px;
`;

export const Movement = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 1000px;
`;

export const HeaderMov = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  p {
    font-size: ${fonts.Default};
    font-weight: bold;
    line-height: 14px;
    color: ${colors.DarkBlue};
  }

  #filter {
    display: flex;
    h2 {
      font-size: ${fonts.Default};
      line-height: 14px;
      letter-spacing: 0.15em;
      font-weight: normal;
      color: ${colors.Grey};
    }

    .filterIcon {
      color: ${colors.Grey};
      margin-left: 5px;
    }
  }
`;

export const Items = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: ${fonts.Default};
    line-height: 14px;
    letter-spacing: 0.15em;
    color: ${colors.LightGrey};
    font-weight: normal;
    margin-right: 150px;
  }

  h1 {
    font-size: ${fonts.Default};
    line-height: 14px;
    letter-spacing: 0.15em;
    color: ${colors.LightGrey};
    font-weight: normal;
  }
`;

export const History = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  #items {
    margin-bottom: 10px;
    align-items: center;
    display: flex;
    width: 100%;
    height: 50px;
    border: none;
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(180, 185, 207, 0.2);
    border-radius: 8.64481px;

    .description {
      position: absolute;
      margin-left: 20px;

      p {
        font-size: ${fonts.Default};
        font-weight: normal;
        color: ${colors.Grey};
      }
    }

    .data {
      position: absolute;
      margin-left: 415px;

      p {
        font-size: ${fonts.Default};
        font-weight: normal;
        color: ${colors.LightGrey};
      }
    }

    .value {
      position: absolute;
      margin-left: 620px;

      p {
        font-size: ${fonts.Default};
        font-weight: bold;
        color: ${colors.Orange};
      }
    }

    .status {
      position: absolute;
      margin-left: 930px;

      p {
        font-size: ${fonts.Default};
        font-weight: normal;
        color: ${colors.Grey};
      }
    }
  }
`;

export const MovFooter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 820px;
  margin-top: 20px;

  a {
    font-size: ${fonts.Default};
    text-decoration: none;
    color: ${colors.DarkGrey};

    &:hover {
      color: ${darken(0.1, colors.DarkGrey)};
    }
  }
`;

export const Resume = styled.div`
  margin-left: 50px;
  background: #ffffff;
  border: none;
  box-shadow: 0px 10px 20px rgba(180, 185, 207, 0.2);
  border-radius: 8.64481px;
  width: 350px;
  height: 290px;
  display: flex;
  flex-direction: column;

  .header {
    margin-top: 20px;
    margin-left: 20px;

    p {
      font-size: ${fonts.Default};
      color: ${colors.DarkBlue};
      font-weight: bold;
    }
  }

  .content {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    .text {
      font-size: ${fonts.Default};
      color: ${colors.LightGrey};
      letter-spacing: 0.15em;
    }

    .status {
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 5px;
      align-items: center;
      display: flex;
      justify-content: space-between;

      .state {
        font-size: ${fonts.Default};
        color: ${colors.Grey};
        text-align: right;
      }
    }

    .item {
      display: flex;
      margin-top: 15px;
      justify-content: space-between;
      margin-left: 20px;
      margin-right: 20px;

      .info {
        align-items: center;
        background: ${colors.LightBlue};
        height: 20px;
        border-radius: 3px;

        p {
          margin-left: 10px;
          margin-right: 10px;
          margin-top: 3px;
          text-align: center;
          color: ${colors.Blue};
          font-size: ${fonts.Default};
          letter-spacing: -0.05em;
        }
      }
    }
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
