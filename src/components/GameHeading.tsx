import { styled, Typography } from '@mui/material';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../state-management/game-query/GameQueryStore';

const getHeading = (): string => {
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

	const { data: genres } = useGenres();
	const { data: platforms } = usePlatforms();

	const genreName = genres?.results.find(
		(genre) => genre.id === selectedGenreId,
	)?.name;
	const platformName = platforms?.results.find(
		(platform) => platform.id === selectedPlatformId,
	)?.name;

	return `${platformName || ''} ${genreName || ''}`;
};

const StyledHeading = styled(Typography)(({ theme }) => ({
	marginBottom: theme.spacing(3),
}));

const GameHeading = () => {
	return <StyledHeading variant='h1'>{getHeading()} Games</StyledHeading>;
};

export default GameHeading;
