import React, { useState } from 'react';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

import { Container } from './styles';

export default function Main() {
  const [page] = useState({
    dashboard: true,
    deposit: false,
    cashout: false,
    history: false,
    profile: false,
  });

  return (
    <Container>
      <Sidebar data={page} />
      <Dashboard />
    </Container>
  );
}
