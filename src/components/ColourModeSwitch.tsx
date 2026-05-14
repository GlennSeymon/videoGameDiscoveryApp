import { FormControlLabel, FormGroup, styled, Switch } from '@mui/material';
import { useContext } from 'react';
import { ColorModeContext } from './Theme';

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
	whiteSpace: 'nowrap',
}));

const ColourModeSwitch = () => {
	const { toggleColorMode } = useContext(ColorModeContext);

	return (
		<FormGroup>
			<StyledFormControlLabel
				control={<Switch size='small' onChange={toggleColorMode} />}
				label='Light Mode'
			/>
		</FormGroup>
	);
};

export default ColourModeSwitch;
