import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Container1, Logo, FooterForm } from './styles';

import logo from '../../../assets/400dpiLogoCropped.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Campo obrigatório'),
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
          <Input name="email" type="email" placeholder="Email" />
          <FooterForm>
            <Link to="/">Voltar para o login</Link>
            <button type="submit">RECUPERAR</button>
          </FooterForm>
        </Form>
      </Container1>
    </>
  );
}
