import './App.css';
import { Grid, styled } from '@mui/material';
import NavBar from './components/NavBar';

const SidePanel = styled(Grid)(({ theme }) => ({
	backgroundColor: 'gold',
	display: 'none',
	[theme.breakpoints.up('sm')]: {
		display: 'block',
	},
}));

function App() {
	return (
		<Grid container spacing={0}>
			<Grid size={{ xs: 12 }}>
				<NavBar />
			</Grid>

			<SidePanel size={{ md: 2 }}>
				<div>Side Panel</div>
			</SidePanel>

			<Grid size={{ xs: 12, sm: 10 }} sx={{ backgroundColor: 'dodgerblue' }}>
				<div>Main Panel</div>
			</Grid>
		</Grid>
	);
}

export default App;
