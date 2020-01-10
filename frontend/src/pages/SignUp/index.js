/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable react/state-in-constructor */
import React, { useState } from 'react';

import Sidebar from './Sidebar';
import DadosPessoais from './DadosPessoais';
import Documentos from './Documentos';
import DadosBancarios from './DadosBancarios';
import Success from './Success';

import { Container } from './styles';

export default function SignUp() {
  const [step, setStep] = useState({
    dadosPessoais: true,
    documentos: false,
    dadosBancarios: false,
    success: false,
  });

  const [dataForm, setDataForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cpf: '',
    password: '',
  });

  const [documentsForm, setDocumentsForm] = useState({
    id: '',
    selfie: '',
    residencia: '',
  });

  const [bankDataForm, setBankDataForm] = useState({
    bankType: '',
    agency: '',
    account: '',
    accountType: '',
  });

  const handleBankDataForm = name => ({ target: { value } }) => {
    setBankDataForm({
      ...bankDataForm,
      [name]: value,
    });

    console.tron.log(bankDataForm);
  };

  const handleDataForm = name => ({ target: { value } }) => {
    setDataForm({
      ...dataForm,
      [name]: value,
    });

    console.tron.log(dataForm);
  };

  const handleDocumentsForm = name => ({ target: { value } }) => {
    setDocumentsForm({
      ...documentsForm,
      [name]: value,
    });

    console.tron.log(documentsForm);
  };

  function nextStep(name) {
    setStep({
      documentos: false,
      dadosBancarios: false,
      [name]: true,
    });
  }

  function successSignUp(name) {
    setStep({
      success: false,
      [name]: true,
    });

    console.tron.log(dataForm, bankDataForm, documentsForm);
  }

  return (
    <Container>
      <Sidebar data={step} />
      {step.dadosPessoais && (
        <DadosPessoais
          action={() => nextStep('documentos')}
          handleValue={handleDataForm}
        />
      )}

      {step.documentos && (
        <Documentos
          action={() => nextStep('dadosBancarios')}
          handleValue={handleDocumentsForm}
        />
      )}

      {step.dadosBancarios && (
        <DadosBancarios
          action={() => successSignUp('success')}
          handleValue={handleBankDataForm}
        />
      )}

      {step.success && <Success />}
    </Container>
  );
}
