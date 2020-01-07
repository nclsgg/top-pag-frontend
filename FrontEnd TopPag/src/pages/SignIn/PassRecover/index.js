import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container1, Logo, FooterForm } from './styles';

import logo from '../../../assets/400dpiLogoCropped.png';

const schema = Yup.object().shape({
  password: Yup.string().required('Campo obrigatório'),
  confirmPassword: Yup.string()
    .required('Campo obrigatório')
    .oneOf([Yup.ref('password'), null], 'As senhas devem coincidir'),
});

export default function PageRecover() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Container1>
        <Logo src={logo} alt="logo" />

        <Form schema={schema} onSubmit={handleSubmit}>
          <Input name="password" type="password" placeholder="Nova Senha" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Repetir Senha"
          />
          <FooterForm>
            <button type="submit">SALVAR SENHA</button>
          </FooterForm>
        </Form>
      </Container1>
    </>
  );
}
