import { Grid, Stack, styled } from '@mui/material';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import OrderingSelector from '../components/OrderingSelector';
import PlatformSelector from '../components/PlatformSelector';
import GenreList from '../components/GenreList';
import NavBar from '../components/NavBar';

const StyledGridContainer = styled(Grid)(({ theme }) => ({
	textAlign: 'left',
	marginTop: theme.spacing(1),
}));

const SidePanel = styled(Grid)(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.up('sm')]: {
		display: 'block',
	},
	paddingLeft: theme.spacing(1),
}));

const StyledStack = styled(Stack)(({ theme }) => ({
	marginBottom: theme.spacing(5),
}));

const ListPage = () => {
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
};

export default ListPage;
