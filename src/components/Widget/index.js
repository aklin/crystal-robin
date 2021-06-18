import CardIcon from '../Card/CardIcon';
import CardHeader from '../Card/CardHeader';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../assets/jss/material-dashboard-react/views/dashboardStyle';
import CardFooter from '../Card/CardFooter';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const useStyles = makeStyles(styles);

export default function Widget({ icon, iconColor, content, footer }) {
	const classes = useStyles();

	return (
		<Card>
			<CardHeader color={iconColor} stats icon>
				<CardIcon color={iconColor}>{icon}</CardIcon>
				{content}
			</CardHeader>
			<CardFooter stats>
				<div className={classes.stats}>{footer}</div>
			</CardFooter>
		</Card>
	);
}

Widget.propTypes = {
	icon: PropTypes.node,
	iconColor: PropTypes.string,
	content: PropTypes.node,
	footer: PropTypes.node,
};
