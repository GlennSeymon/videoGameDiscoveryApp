import React from 'react';
import { Game } from '../hooks/useGames';
import {
	Card,
	CardContent,
	CardMedia,
	styled,
	Typography,
} from '@mui/material';

interface Props {
	game: Game;
}

const StyledCardContent = styled(CardMedia)({
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
				<Typography>{game.description}</Typography>
			</StyledCardContent>
		</Card>
	);
};

export default GameCard;
