import { Game } from '../hooks/useGames';
import { Box, CardMedia, Stack, styled, Typography } from '@mui/material';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import GameCardContainer from './GameCardContainer';
import EmojiRating from './EmojiRating';

interface Props {
	game: Game;
}

const StyledCardMedia = styled(CardMedia)({
	height: '70%',
	width: '100%',
	backgroundPosition: 'top',
});

const StyledStack = styled(Stack)({
	justifyContent: 'space-between',
});

const StyledDetails = styled(Box)(({ theme }) => ({
	margin: theme.spacing(1),
}));

const GameCard = ({ game }: Props) => {
	return (
		<GameCardContainer>
			<StyledCardMedia image={getCroppedImageUrl(game.background_image)} />
			<StyledDetails>
				<StyledStack direction='row'>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<Typography>{game.description}</Typography>
					<CriticScore score={game.rating_top} />
				</StyledStack>
				<Typography variant='h6' component='h2'>
					{game.name}
				</Typography>
				<EmojiRating rating={game.rating_top} />
			</StyledDetails>
		</GameCardContainer>
	);
};

export default GameCard;
