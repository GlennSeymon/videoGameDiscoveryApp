import { Grid, Typography } from '@mui/material';
import Game from '../entities/Game';
import CriticScore from './CriticScore';
import GridDefinitionItem from './GridDefinitionItem';

interface Props {
	game: Game;
}

const GameAttributes = ({ game }: Props) => {
	return (
		<Grid container component={'dl'}>
			<GridDefinitionItem term='Platforms'>
				{game?.parent_platforms?.map(({ platform }) => (
					<Typography key={platform.id}>{platform.name}</Typography>
				))}
			</GridDefinitionItem>
			<GridDefinitionItem term='Metascore'>
				<CriticScore score={game ? game.metacritic : 0} />
			</GridDefinitionItem>

			<GridDefinitionItem term='Genres'>
				{game?.genres.map((genre) => (
					<Typography key={genre.id}>{genre.name}</Typography>
				))}
			</GridDefinitionItem>

			<GridDefinitionItem term='Publishers'>
				{game?.publishers.map((publisher) => (
					<Typography key={publisher.id}>{publisher.name}</Typography>
				))}
			</GridDefinitionItem>
		</Grid>
	);
};

export default GameAttributes;
