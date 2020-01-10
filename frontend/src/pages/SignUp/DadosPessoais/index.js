/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Check } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Wrapper, Container, FooterForm, Formulario, Circle } from './styles';

const schema = Yup.object().shape({
  nome: Yup.string().required('Campo obrigatório'),
  sobrenome: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Campo obrigatório'),
  telefone: Yup.number()
    .typeError('Insira somente números')
    .integer('Insira somente números')
    .min(9, 'Número de telefone inválido')
    .required('Campo obrigatório'),
  cpf: Yup.number()
    .typeError('Insira somente números')
    .integer('Insira somente números')
    .min(11, 'CPF inválido')
    .required('Campo Obrigatório'),
  senha: Yup.string().required('Campo obrigatório'),
  confirmarSenha: Yup.string()
    .required('Campo obrigatório')
    .oneOf([Yup.ref('senha'), null], 'As senhas devem coincidir'),
});

function DadosPessoais({ action, handleValue }) {
  return (
    <Wrapper>
      <Container>
        <Formulario>
          <div id="title">
            <Circle id="active">
              <span>1</span>
            </Circle>
            <div id="ellipse">
              <h1>Dados Pessoais</h1>
            </div>
          </div>
          <Form schema={schema} onSubmit={action}>
            <div id="formDiv">
              <div id="error">
                <Input
                  name="nome"
                  placeholder="NOME"
                  onChange={handleValue('firstName')}
                />
              </div>
              <div id="error">
                <Input
                  name="sobrenome"
                  placeholder="SOBRENOME"
                  onChange={handleValue('lastName')}
                />
              </div>
            </div>
            <div id="formDiv">
              <div id="error">
                <Input
                  name="email"
                  type="email"
                  placeholder="E-MAIL"
                  onChange={handleValue('email')}
                />
              </div>
              <div id="error">
                <Input
                  name="telefone"
                  placeholder="TELEFONE"
                  onChange={handleValue('phone')}
                />
              </div>
            </div>
            <div id="formCPF">
              <div id="error">
                <Input
                  name="cpf"
                  placeholder="CPF"
                  onChange={handleValue('cpf')}
                />
              </div>
            </div>
            <div id="formDiv">
              <div id="error">
                <Input
                  name="senha"
                  type="password"
                  placeholder="SENHA"
                  onChange={handleValue('password')}
                />
              </div>
              <div id="error">
                <Input
                  name="confirmarSenha"
                  type="password"
                  placeholder="REPETIR SENHA"
                />
              </div>
            </div>
            <FooterForm>
              <p>* Campos marcados com este ícone são obrigatórios</p>
              <div id="termo">
                <Check name="termos" />
                <i>Aceitar os termos</i>
              </div>
              <button type="submit">CONTINUAR CADASTRO</button>
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

export default DadosPessoais;
