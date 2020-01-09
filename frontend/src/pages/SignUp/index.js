/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';

import Sidebar from './Sidebar';
import DadosPessoais from './DadosPessoais/index';

import { Container } from './styles';

export default function SignUp() {
  const [step, setStep] = useState({
    dadosPessoais: true,
    documentos: false,
    dadosBancarios: false,
  });

  const [dataForm, setDataForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });

  const handleDataForm = name => ({ target: { value } }) => {
    setDataForm({
      ...dataForm,
      [name]: value,
    });

    console.tron.log(dataForm);
  };

  function nextStep(nome) {
    setStep({
      dadosPessoais: false,
      documentos: false,
      dadosBancarios: false,
      [nome]: false,
    });
  }

  return (
    <Container>
      <Sidebar data={step} />
      {step.dadosPessoais && (
        <DadosPessoais
          action={() => nextStep('dadosPessoais')}
          handleValue={handleDataForm}
        />
      )}
    </Container>
  );
}
