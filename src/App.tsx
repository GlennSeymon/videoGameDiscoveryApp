import './App.css';
import { Grid, styled } from '@mui/material';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { Genre } from './hooks/useGenres';
import { useState } from 'react';

const SidePanel = styled(Grid)(({ theme }) => ({
	display: 'none',
	[theme.breakpoints.up('sm')]: {
		display: 'block',
	},
	paddingLeft: theme.spacing(1),
}));

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

	const handleGenreClick = (genre: Genre): void => {
		setSelectedGenre(genre);
	};

	return (
		<Grid container spacing={0}>
			<Grid size={{ xs: 12 }}>
				<NavBar />
			</Grid>

			<SidePanel size={{ md: 2 }}>
				<GenreList onClickGenre={(genre) => handleGenreClick(genre)} />
			</SidePanel>

			<Grid size={{ xs: 12, sm: 10 }}>
				<GameGrid selectedGenre={selectedGenre} />
			</Grid>
		</Grid>
	);
}

export default App;
