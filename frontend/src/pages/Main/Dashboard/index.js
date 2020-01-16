import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilter } from 'react-icons/fa';
import {
  Wrapper,
  Header,
  Avatar,
  Profile,
  Container,
  Movement,
  HeaderMov,
  Items,
  History,
  MovFooter,
  Resume,
} from './styles';
import avatar from '../../../assets/avatar.png';
import indicator from '../../../assets/Indicator.png';

export default function Dashboard() {
  return (
    <Wrapper>
      <Header>
        <h1>Dashboard</h1>
        <Profile>
          <div id="profileDisplay">
            <Link to="/main">Nicolas Guadagno</Link>
            <Avatar src={avatar} alt="avatar" />
          </div>
        </Profile>
      </Header>

      <Container>
        <Movement>
          <HeaderMov>
            <p>Movimentações da minha conta</p>
            <div id="filter">
              <h2>FILTRO</h2>
              <FaFilter className="filterIcon" />
            </div>
          </HeaderMov>

          <Items>
            <h2>DESCRIÇÃO</h2>
            <h1>DATA</h1>
            <h1>VALOR DE ENTRADA</h1>
            <h1>STATUS</h1>
          </Items>

          <History>
            <div id="items">
              <div className="description">
                <p>TED para Neomar</p>
              </div>
              <div className="data">
                <p>16/01/2020</p>
              </div>
              <div className="value">
                <p>R$ 300,00</p>
              </div>
              <div className="status">
                <p>Pendente</p>
              </div>
            </div>

            <div id="items">
              <div className="description">
                <p>TED para Neomar</p>
              </div>
              <div className="data">
                <p>16/01/2020</p>
              </div>
              <div className="value">
                <p>R$ 300,00</p>
              </div>
              <div className="status">
                <p>Pendente</p>
              </div>
            </div>

            <div id="items">
              <div className="description">
                <p>TED para Neomar</p>
              </div>
              <div className="data">
                <p>16/01/2020</p>
              </div>
              <div className="value">
                <p>R$ 300,00</p>
              </div>
              <div className="status">
                <p>Pendente</p>
              </div>
            </div>

            <div id="items">
              <div className="description">
                <p>TED para Neomar</p>
              </div>
              <div className="data">
                <p>16/01/2020</p>
              </div>
              <div className="value">
                <p>R$ 300,00</p>
              </div>
              <div className="status">
                <p>Pendente</p>
              </div>
            </div>
          </History>
          <MovFooter>
            <Link to="/main">Ver todas as movimentações</Link>
          </MovFooter>
        </Movement>

        <Resume>
          <div className="header">
            <p>Resumo da conta</p>
          </div>
          <div className="content">
            <div className="status">
              <p className="text">STATUS DA CONTA</p>
              <p className="state">Ativa</p>
            </div>
            <div className="item">
              <p className="text">NÚMERO DA CONTA</p>
              <div className="info">
                <p>32430-9</p>
              </div>
            </div>
            <div className="item">
              <p className="text">CPF</p>
              <div className="info">
                <p>XXX.XXX.XXX-02</p>
              </div>
            </div>
            <div className="item">
              <p className="text">TIPO DA CONTA</p>
              <div className="info">
                <p>Conta Corrente</p>
              </div>
            </div>
            <div className="item">
              <p className="text">IP DO ÚLTIMO LOGIN</p>
              <div className="info">
                <p>16/01/2020</p>
              </div>
            </div>
            <div className="item">
              <p className="text">STATUS DA CONTA</p>
              <div className="info">
                <p>192.168.0.1</p>
              </div>
            </div>
          </div>
        </Resume>
      </Container>
    </Wrapper>
  );
}
