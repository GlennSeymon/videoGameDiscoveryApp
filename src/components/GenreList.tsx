import { Alert, CircularProgress } from '@mui/material';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
	const { genres, error, isLoading } = useGenres();

	return (
		<>
			{error && <Alert severity='error'>{error.message}</Alert>}
			{isLoading && <CircularProgress />}

			<ul>
				{genres.map((genre) => (
					<li key={genre.id}>{genre.name}</li>
				))}
			</ul>
		</>
	);
};

export default GenreList;
