import { CircularProgress, Typography } from '@mui/material';
import useTrailer from '../hooks/useTrailer';

interface Props {
	gameId: number;
}

const Trailer = ({ gameId }: Props) => {
	const { data: trailer, isLoading, error } = useTrailer(gameId);

	if (isLoading) return <CircularProgress />;
	//if (error || !trailer) throw error;

	const firstTrailer = trailer?.results[0];
	if (!firstTrailer) return null;

	return (
		<>
			<Typography variant='h2'>Trailer</Typography>
			<video
				src={firstTrailer.data[480]}
				poster={firstTrailer.preview}
				controls={true}
				width={'100%'}
			></video>
		</>
	);
};

export default Trailer;
