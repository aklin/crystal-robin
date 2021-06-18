import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { CoffeeContext, useInitialiseCoffeeStore } from './store/coffee';
import { BasketContext, useInitialiseBasket } from './store/basket';
import Admin from './layouts/Admin';

export default function App() {
	const { state, dispatch } = useInitialiseCoffeeStore();
	const { state: basketState, dispatch: basketDispatch } =
		useInitialiseBasket();

	return (
		<CoffeeContext.Provider value={{ state, dispatch }}>
			<BasketContext.Provider
				value={{ state: basketState, dispatch: basketDispatch }}
			>
				<BrowserRouter>
					<Switch>
						<Route path="/admin" component={Admin} />
						<Redirect from="/" to="/admin/dashboard" />
					</Switch>
				</BrowserRouter>
			</BasketContext.Provider>
		</CoffeeContext.Provider>
	);
}
