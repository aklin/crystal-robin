import { RemoveShoppingCart, ShoppingCartOutlined } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';

export const AddToCart = ({ classes }) => (
	<IconButton aria-label="Add" className={classes.tableActionButton}>
		<ShoppingCartOutlined
			className={classes.tableActionButtonIcon + ' ' + classes.edit}
		/>
	</IconButton>
);

export const RemoveFromCart = ({ classes }) => (
	<IconButton aria-label="Remove" className={classes.tableActionButton}>
		<RemoveShoppingCart
			className={classes.tableActionButtonIcon + ' ' + classes.close}
		/>
	</IconButton>
);
