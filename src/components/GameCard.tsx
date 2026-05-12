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

interface Props {
	game: Game;
}

const StyledCardContent = styled(CardContent)({
	padding: 0,
	height: '10rem',
});

const StyledCardMedia = styled(CardMedia)({
	height: '80px',
});

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<StyledCardContent>
				<StyledCardMedia
					image={game.background_image}
					src={game.background_image}
				/>
				<Typography variant='h6' component='h2'>
					{game.name}
				</Typography>
				<PlatformIconList
					platforms={game.parent_platforms.map((p) => p.platform)}
				/>
				<Typography>{game.description}</Typography>
			</StyledCardContent>
		</Card>
	);
};

export default GameCard;
