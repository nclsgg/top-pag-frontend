/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
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
  id: Yup.string().required('Campo obrigatório'),
  selfie: Yup.string().required('Campo obrigatório'),
  residencia: Yup.string().required('Campo obrigatório'),
});

function Documentos({ action, handleValue }) {
  return (
    <Wrapper>
      <Container>
        <Formulario>
          <div id="title">
            <Circle id="active">
              <span>2</span>
            </Circle>
            <div id="ellipse">
              <h1>Documentoss</h1>
            </div>
          </div>
          <Form schema={schema} onSubmit={action}>
            <div id="formDiv">
              <div id="error">
                <Input
                  name="id"
                  placeholder="FOTO DA IDENTIDADE"
                  onChange={handleValue('id')}
                />
              </div>
              <div id="error">
                <Input
                  name="selfie"
                  placeholder="SELFIE"
                  onChange={handleValue('selfie')}
                />
              </div>
            </div>
            <div id="formDiv">
              <div id="error">
                <Input
                  name="residencia"
                  placeholder="COMPROVANTE DE RESIDÊNCIA"
                  onChange={handleValue('residencia')}
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
