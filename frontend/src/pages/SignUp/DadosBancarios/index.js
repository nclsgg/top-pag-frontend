/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Select } from '@rocketseat/unform';
import { FaChevronRight } from 'react-icons/fa';
import * as Yup from 'yup';

import {
  Wrapper,
  Container,
  FooterForm,
  Formulario,
  BtnCadastro,
  BtnStep,
  Circle,
} from './styles';

const schema = Yup.object().shape({
  bank: Yup.string().required('Campo obrigatório'),
  agency: Yup.number()
    .typeError('Insira somente números')
    .integer('Insira somente números')
    .required('Campo obrigatório'),
  account: Yup.number()
    .typeError('Insira somente números')
    .integer('Insira somente números')
    .required('Campo obrigatório'),
  accountType: Yup.string().required('Campo obrigatório'),
});

const banks = [
  { id: 'caixa', title: 'Caixa Econômica Federal' },
  { id: 'itau', title: 'Itaú' },
  { id: 'santander', title: 'Santander' },
];

const accounts = [
  { id: 'poupanca', title: 'Poupança' },
  { id: 'corrente', title: 'Corrente' },
];

function Documentos({ action, handleValue }) {
  return (
    <Wrapper>
      <Container>
        <Formulario>
          <div id="title">
            <Circle id="active">
              <span>3</span>
            </Circle>
            <div id="ellipse">
              <h1>Dados Bancários</h1>
            </div>
          </div>
          <Form schema={schema} onSubmit={action}>
            <div id="formDiv">
              <div id="error">
                <Select
                  name="bank"
                  options={banks}
                  placeholder="BANCO"
                  onChange={handleValue('bankType')}
                />
              </div>
              <div id="error">
                <Input
                  name="agency"
                  placeholder="AGÊNCIA"
                  onChange={handleValue('agency')}
                />
              </div>
              <div id="error">
                <Input
                  name="account"
                  placeholder="CONTA"
                  onChange={handleValue('account')}
                />
              </div>
            </div>
            <div id="formDiv">
              <div id="error">
                <Select
                  name="accountType"
                  options={accounts}
                  placeholder="TIPO DE CONTA"
                  onChange={handleValue('accountType')}
                />
              </div>
            </div>
            <FooterForm>
              <div id="step">
                <p>Pular Etapa</p>
                <BtnStep type="button" onClick={action}>
                  <FaChevronRight />
                </BtnStep>
              </div>
              <BtnCadastro type="submit">CONTINUAR CADASTRO</BtnCadastro>
            </FooterForm>
            <div id="login">
              <p>Já tem uma conta? </p>
              <Link to="/"> Clique aqui.</Link>
            </div>
          </Form>
        </Formulario>
      </Container>
    </Wrapper>
  );
}

export default Documentos;
