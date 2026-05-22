import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const StyledBox = styled(Box)(({ theme }) => ({
	padding: theme.spacing(2),
}));

const Layout = () => {
	return (
		<>
			<StyledBox>
				<NavBar />

				<Outlet />
			</StyledBox>
		</>
	);
};

export default Layout;
