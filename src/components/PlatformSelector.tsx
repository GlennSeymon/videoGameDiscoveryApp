import {
	Alert,
	CircularProgress,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { usePlatform } from '../hooks/usePlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../state-management/game-query/GameQueryStore';

const PlatformSelector = () => {
	const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const setPlatform = useGameQueryStore((s) => s.setPlatform);

	const selectedPlatform = usePlatform(selectedPlatformId);
	const { data, error, isLoading } = usePlatforms();

	if (error) return <Alert severity='error'>{error?.message}</Alert>;
	if (isLoading) return <CircularProgress />;

	return (
		<FormControl sx={{ width: '30%' }}>
			<InputLabel id='platformLabel'>Platform</InputLabel>
			<Select labelId='platformLabel' label='Platform' value={selectedPlatform}>
				{data?.results.map((platform) => (
					<MenuItem
						key={platform.id}
						value={platform.id}
						onClick={() => setPlatform(platform.id)}
					>
						{platform.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default PlatformSelector;
