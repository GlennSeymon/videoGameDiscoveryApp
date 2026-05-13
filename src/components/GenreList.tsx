import { Alert, CircularProgress } from '@mui/material';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
	const { data, error, isLoading } = useGenres();

	return (
		<>
			{error && <Alert severity='error'>{error.message}</Alert>}
			{isLoading && <CircularProgress />}

			<ul>
				{data.map((genre) => (
					<li key={genre.id}>{genre.name}</li>
				))}
			</ul>
		</>
	);
};

export default GenreList;
