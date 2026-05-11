import './App.css';
import { Box, Grid, styled } from '@mui/material';

const SidePanel = styled(Grid)(({ theme }) => ({
	backgroundColor: 'gold',
	display: 'none',
	[theme.breakpoints.up('sm')]: {
		display: 'block',
	},
}));

function App() {
	return (
		<Grid container spacing={2}>
			<Grid size={{ xs: 12 }} sx={{ backgroundColor: 'coral' }}>
				<div>NavBar</div>
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
