import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Admin from './layouts/Admin';
import RTL from './layouts/RTL';
import React from 'react';
import { useInitialiseCoffeeStore } from './store/coffee';
import { useInitialiseBasket } from './store/basket';

export default function App() {
  useInitialiseCoffeeStore();
  useInitialiseBasket();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/rtl" component={RTL} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  );
}
