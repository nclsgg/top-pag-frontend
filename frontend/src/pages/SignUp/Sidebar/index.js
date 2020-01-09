/* eslint-disable react/prop-types */
import React from 'react';

import { Container, Navigator, Logo, LogoM, Line, Circle } from './styles';

import logo from '../../../assets/400dpiLogoSmall.png';
import logomobile from '../../../assets/400dpiLogoCropped.png';

export default function Sidebar({ data }) {
  return (
    <Container>
      <Navigator>
        <div id="logo">
          <Logo src={logo} alt="logo" />
          <LogoM src={logomobile} alt="logomobile" />
        </div>
        <div id="navDraw">
          <div id="nav">
            <div className={data.dadosPessoais ? 'step' : 'step2'}>
              <Circle className={data.dadosPessoais && 'active'}>
                <span>1</span>
              </Circle>
              <p>Dados Pessoais</p>
            </div>
          </div>
          <Line />
          <div id="nav">
            <div className={data.documentos ? 'step' : 'step2'}>
              <Circle className={data.documentos && 'active'}>
                <span>2</span>
              </Circle>
              <p>Documentos</p>
            </div>
          </div>
          <Line />
          <div id="nav">
            <div className={data.dadosBancarios ? 'step' : 'step2'}>
              <Circle className={data.dadosBancarios && 'active'}>
                <span>3</span>
              </Circle>
              <p>Dados Bancários</p>
            </div>
          </div>
        </div>
      </Navigator>
    </Container>
  );
}
