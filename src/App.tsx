import './App.css';
import { Grid, styled } from '@mui/material';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

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

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	const handleGenreClick = (genre: Genre): void => {
		setGameQuery({ ...gameQuery, genre });
	};

	const handlePlatformSelect = (platform: Platform): void => {
		setGameQuery({ ...gameQuery, platform });
	};

	return (
		<StyledGridContainer container spacing={0}>
			<Grid size={{ xs: 12 }}>
				<NavBar />
			</Grid>

			<SidePanel size={{ md: 2 }}>
				<GenreList
					onClickGenre={(genre) => handleGenreClick(genre)}
					selectedGenre={gameQuery.genre}
				/>
			</SidePanel>

			<Grid size={{ xs: 12, sm: 10 }}>
				<PlatformSelector
					onSelectPlatform={(platform) => handlePlatformSelect(platform)}
				/>
				<GameGrid gameQuery={gameQuery} />
			</Grid>
		</StyledGridContainer>
	);
}

export default App;
