import { Stack, styled } from '@mui/material';
import ColourModeSwitch from './ColourModeSwitch';
import SearchInput from './SearchInput';

interface Props {
	onSearch: (searchValue: string) => void;
}

const Logo = styled('img')({
	height: '60px',
	width: '60px',
});

const NavBar = ({ onSearch }: Props) => {
	return (
		<Stack direction={'row'} spacing={2}>
			<Logo src='src/assets/logo.webp' />
			<SearchInput onSearch={onSearch} />
			<ColourModeSwitch />
		</Stack>
	);
};

export default NavBar;
