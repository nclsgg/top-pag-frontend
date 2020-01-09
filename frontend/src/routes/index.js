import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import PageRecover from '../pages/SignIn/PageRecover';
import PassRecover from '../pages/SignIn/PassRecover';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/pagerecover" component={PageRecover} />
      <Route path="/recover" component={PassRecover} />

      <Route path="/main" component={Main} isPrivate />
    </Switch>
  );
}
