import usePlatforms from '../hooks/usePlatforms';
import {
	Alert,
	CircularProgress,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

const PlatformSelector = () => {
	const { data, error, isLoading } = usePlatforms();

	return (
		<>
			{error && <Alert severity='error'>{error?.message}</Alert>}
			{isLoading && <CircularProgress />}

			<FormControl sx={{ width: '30%' }}>
				<InputLabel id='platformLabel'>Platform</InputLabel>
				<Select labelId='platformLabel' label='Platform'>
					<MenuItem key='all' value='all'>
						All
					</MenuItem>
					{data.map((platform) => (
						<MenuItem key={platform.id} value={platform.name}>
							{platform.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
};

export default PlatformSelector;
