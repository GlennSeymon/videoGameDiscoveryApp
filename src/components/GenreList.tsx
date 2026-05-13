import {
	Alert,
	CircularProgress,
	List,
	ListItem,
	styled,
	Typography,
} from '@mui/material';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const StyledImage = styled('img')(({ theme }) => ({
	height: '32px',
	width: '32px',
	marginRight: theme.spacing(1),
	borderRadius: theme.spacing(1),
}));

const StyledListItem = styled(ListItem)({
	padding: 0,
});

const GenreList = () => {
	const { data, error, isLoading } = useGenres();

	return (
		<>
			{error && <Alert severity='error'>{error.message}</Alert>}
			{isLoading && <CircularProgress />}

			{data.map((genre) => (
				<List>
					<StyledListItem key={genre.id}>
						<StyledImage src={getCroppedImageUrl(genre.image_background)} />
						<Typography>{genre.name}</Typography>
					</StyledListItem>
				</List>
			))}
		</>
	);
};

export default GenreList;
