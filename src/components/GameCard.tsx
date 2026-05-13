import React from 'react';
import { Game } from '../hooks/useGames';
import {
	Card,
	CardContent,
	CardMedia,
	styled,
	Typography,
} from '@mui/material';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	game: Game;
}

const StyledCardContent = styled(CardContent)({
	padding: 0,
	height: '15rem',
});

const StyledCardMedia = styled(CardMedia)({
	height: '70%',
	width: '100%',
	backgroundPosition: 'top',
});

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<StyledCardContent>
				<StyledCardMedia image={getCroppedImageUrl(game.background_image)} />
				<Typography variant='h6' component='h2'>
					{game.name}
				</Typography>
				<PlatformIconList
					platforms={game.parent_platforms.map((p) => p.platform)}
				/>
				<Typography>{game.description}</Typography>
				<CriticScore score={game.metacritic} />
			</StyledCardContent>
		</Card>
	);
};

export default GameCard;
