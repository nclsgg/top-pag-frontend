import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Header,
  Avatar,
  Profile,
  Container,
  Movement,
  HeaderMov,
} from './styles';
import avatar from '../../../assets/avatar.png';

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
              <h2>Filtro</h2>
            </div>
          </HeaderMov>
        </Movement>
      </Container>
    </Wrapper>
  );
}
