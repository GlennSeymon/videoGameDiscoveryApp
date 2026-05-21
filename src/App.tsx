import { Grid, Stack, styled } from '@mui/material';
import './App.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import OrderingSelector from './components/OrderingSelector';
import PlatformSelector from './components/PlatformSelector';
import useGameQueryStore from './state-management/game-query/GameQueryStore';

const SidePanel = styled(Grid)(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.up('sm')]: {
		display: 'block',
	},
	paddingLeft: theme.spacing(1),
}));

const StyledGridContainer = styled(Grid)({
	textAlign: 'left',
});

const StyledStack = styled(Stack)(({ theme }) => ({
	marginBottom: theme.spacing(5),
}));

function App() {
	return (
		<StyledGridContainer container spacing={0}>
			<Grid size={{ xs: 12 }}>
				<NavBar />
			</Grid>

			<SidePanel size={{ md: 2 }}>
				<GenreList />
			</SidePanel>

			<Grid size={{ xs: 12, sm: 10 }}>
				<GameHeading />
				<StyledStack direction='row' spacing={2}>
					<PlatformSelector />
					<OrderingSelector />
				</StyledStack>
				<GameGrid />
			</Grid>
		</StyledGridContainer>
	);
}

export default App;
