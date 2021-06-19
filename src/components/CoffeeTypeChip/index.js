import React from 'react';
import { Chip } from '@material-ui/core';
import { ColdIcon, HotIcon } from '../AppIcons';

export default function CoffeeTypeChip({ type }) {
	const colour = type === 'hot' ? 'warning' : 'info';
	const icon = type === 'hot' ? <HotIcon /> : <ColdIcon />;
	return <Chip icon={icon} color={colour} label={type.toUpperCase()} />;
}
