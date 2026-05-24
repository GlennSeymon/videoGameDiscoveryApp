import { Stack, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp';
import ColourModeSwitch from './ColourModeSwitch';
import SearchInput from './SearchInput';

const Logo = styled('img')({
	height: '60px',
	width: '60px',
	objectFit: 'cover',
});

const NavBar = () => {
	return (
		<Stack direction={'row'} spacing={2}>
			<Link to='/'>
				<Logo src={logo} />
			</Link>
			<SearchInput />
			<ColourModeSwitch />
		</Stack>
	);
};

export default NavBar;
