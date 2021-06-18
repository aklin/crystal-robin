/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import DashboardPage from 'views/Dashboard/Dashboard.js';
import React from 'react';
import Cart from './views/Cart';

const dashboardRoutes = [
	{
		path: '/dashboard',
		name: 'Dashboard',
		rtlName: 'لوحة القيادة',
		icon: Dashboard,
		component: DashboardPage,
		layout: '/admin',
	},
	{
		path: '/cart',
		name: 'My Basket',
		icon: Person,
		component: Cart,
		layout: '/admin',
	},
];

export default dashboardRoutes;
