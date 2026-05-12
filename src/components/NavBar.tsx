import { Stack, styled } from '@mui/material';

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
		</StyledStack>
	);
};

export default NavBar;
