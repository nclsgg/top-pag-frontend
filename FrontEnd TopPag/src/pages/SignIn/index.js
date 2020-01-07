import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Logo, Container1, Container2, Wrapper, FooterForm } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/400dpiLogoCropped.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Wrapper>
      <Container2>
        <div id="container">
          <div id="h1">
            <h1>AINDA NÃO ABRIU SUA CONTA?</h1>
          </div>
          <div id="p">
            <p>
              Depósitos, transferências e retiradas com segurança e eficiência
            </p>

            <button type="submit">ABRIR MINHA CONTA</button>
          </div>
        </div>
      </Container2>
      <Container1>
        <Logo src={logo} alt="logo" />
        <div>
          <Form schema={schema} onSubmit={handleSubmit}>
            <Input name="email" type="email" placeholder="Email" />
            <Input name="password" type="password" placeholder="Senha" />
            <FooterForm>
              <p>
                Esqueceu sua senha? <Link to="/pagerecover">clique aqui</Link>
              </p>
              <button type="submit">
                {loading ? 'CARREGANDO...' : 'LOGIN'}
              </button>
            </FooterForm>
          </Form>
        </div>
      </Container1>
    </Wrapper>
  );
}
