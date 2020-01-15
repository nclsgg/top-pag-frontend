/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { GiEntryDoor } from 'react-icons/gi';
import { Link } from 'react-router-dom';

import { Wrapper, ContainerLogo, Container, Logo, Avatar } from './styles';

import logo from '../../../assets/400dpiLogoSmall.png';
import avatar from '../../../assets/avatar.png';

import DashboardIcon from '../../../assets/Dashboard.png';
import ProfileIcon from '../../../assets/Profile.png';
import HistoryIcon from '../../../assets/History.png';
import CashoutIcon from '../../../assets/Cashout.png';
import DepositIcon from '../../../assets/Deposit.png';
import Indicator from '../../../assets/Indicator.png';

export default function Sidebar() {
  function clicked() {
    console.log('Clicou');
  }

  return (
    <Wrapper>
      <ContainerLogo>
        <Logo src={logo} />
        <div id="profileDisplay">
          <Avatar src={avatar} onClick={clicked} />
          <Link to="/main">Nicolas Guadagno</Link>
        </div>
      </ContainerLogo>
      <Container>
        <div id="pages">
          <div id="sections" onClick={clicked}>
            <img src={DashboardIcon} alt="Dashboard" />
            <p>DASHBOARD</p>
            <div id="indicator">
              <img src={Indicator} alt="Indicator" />
            </div>
          </div>
          <div id="sections" onClick={clicked}>
            <img src={DepositIcon} alt="Dashboard" />
            <p>DEPOSITAR</p>
            <div id="indicator">
              <img src={Indicator} alt="Indicator" />
            </div>
          </div>
          <div id="sections" onClick={clicked}>
            <img src={CashoutIcon} alt="Dashboard" />
            <p>SACAR</p>
            <div id="indicator">
              <img src={Indicator} alt="Indicator" />
            </div>
          </div>
          <div id="sections" onClick={clicked}>
            <img src={HistoryIcon} alt="Dashboard" />
            <p>HISTÓRICO</p>
            <div id="indicator">
              <img src={Indicator} alt="Indicator" />
            </div>
          </div>
          <div id="sections" onClick={clicked}>
            <img src={ProfileIcon} alt="Dashboard" />
            <p>PERFIL</p>
            <div id="indicator">
              <img src={Indicator} alt="Indicator" />
            </div>
          </div>
        </div>
      </Container>
      <div id="logout">
        <Link to="/">
          <GiEntryDoor />
          Sair
        </Link>
      </div>
    </Wrapper>
  );
}
