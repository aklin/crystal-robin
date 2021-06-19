import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/material-dashboard-react/components/tasksStyle';
import { asArray } from '../../store/coffee';
import { Chip } from '@material-ui/core';
import CartActions from '../CartActions';
import CoffeeTypeChip from '../CoffeeTypeChip';

const useStyles = makeStyles(styles);

const trimLongText = (text = '') =>
	text.length < 76 ? text : text.substr(0, 72) + '...';

export default function CoffeeTable({
	state,
	cartState = {},
	cartDispatch,
	filter,
}) {
	const classes = useStyles();

	const items = asArray(state)
		.filter((item) => (typeof filter === 'function' ? filter(item) : true))
		.sort((a, b) => a.title.localeCompare(b.title));

	return (
		<Table className={classes.table}>
			<TableBody>
				{items.map(({ uid, title, type, description, ingredients }) => (
					<TableRow key={`${uid}`} className={classes.tableRow}>
						<TableCell className={classes.tableCell}>{title}</TableCell>
						<TableCell className={classes.tableCell}>
							<CoffeeTypeChip type={type} />
						</TableCell>
						<TableCell className={classes.tableCell} title={description}>
							{trimLongText(description)}
						</TableCell>
						<TableCell>
							<span>
								{ingredients.map((ing) => (
									<Chip
										className={classes.ingredientTag}
										key={ing}
										label={ing}
									/>
								))}
							</span>
						</TableCell>
						<TableCell className={classes.tableActions}>
							<CartActions
								classes={classes}
								uid={uid}
								cartState={cartState}
								cartDispatch={cartDispatch}
							/>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
