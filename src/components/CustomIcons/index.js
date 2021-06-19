import { RemoveShoppingCart, ShoppingCartOutlined } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { Tooltip } from '@material-ui/core';
import classnames from 'classnames';

export const AddToCart = ({ onClick, classes }) => (
	<Tooltip
		id="tooltip-top-start"
		title="Add to Cart"
		placement="top"
		classes={{ tooltip: classes.tooltip }}
	>
		<IconButton
			aria-label="Add"
			className={classes.tableActionButton}
			onClick={onClick}
		>
			<ShoppingCartOutlined
				className={classes.tableActionButtonIcon + ' ' + classes.edit}
			/>
		</IconButton>
	</Tooltip>
);

export const RemoveFromCart = ({ onClick, classes, disabled = false }) => (
	<Tooltip
		id="tooltip-top-start"
		title="Remove from Cart"
		placement="top"
		classes={{ tooltip: classes.tooltip }}
	>
		<IconButton
			disabled={disabled}
			aria-label="Remove"
			className={classes.tableActionButton}
			onClick={onClick}
		>
			<RemoveShoppingCart
				className={classnames(
					classes.tableActionButtonIcon,
					!disabled && classes.close
				)}
			/>
		</IconButton>
	</Tooltip>
);
