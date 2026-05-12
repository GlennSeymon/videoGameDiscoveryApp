import { Stack, styled } from '@mui/material';
import ColourModeSwitch from './ColourModeSwitch';

const StyledStack = styled(Stack)({
	justifyContent: 'space-between',
});

const Logo = styled('img')({
	height: '60px',
	width: '60px',
});

const NavBar = () => {
	return (
		<StyledStack direction={'row'} spacing={2}>
			<Logo src='src/assets/logo.webp' />
			<ColourModeSwitch />
		</StyledStack>
	);
};

export default NavBar;
