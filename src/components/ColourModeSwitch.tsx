import { Stack, Switch, Typography } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from './Theme';

const ColourModeSwitch = () => {
	const { toggleColorMode } = useContext(ColorModeContext);

	return (
		<Stack direction={'row'} spacing={2}>
			<Switch onChange={toggleColorMode} />
			<Typography>Light Mode</Typography>
		</Stack>
	);
};

export default ColourModeSwitch;
