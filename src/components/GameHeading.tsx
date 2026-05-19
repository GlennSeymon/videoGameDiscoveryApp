import { styled, Typography } from '@mui/material';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
	gameQuery: GameQuery;
}

const getHeading = (gameQuery: GameQuery): string => {
	const { data: genres } = useGenres();
	const { data: platforms } = usePlatforms();
	const genreName = genres?.results.find(
		(genre) => genre.id === gameQuery.genreId,
	)?.name;
	const platformName = platforms?.results.find(
		(platform) => platform.id === gameQuery.platformId,
	)?.name;

	return `${platformName || ''} ${genreName || ''}`;
};

const StyledHeading = styled(Typography)(({ theme }) => ({
	marginBottom: theme.spacing(3),
}));

const GameHeading = ({ gameQuery }: Props) => {
	return (
		<StyledHeading variant='h1'>{getHeading(gameQuery)} Games</StyledHeading>
	);
};

export default GameHeading;
