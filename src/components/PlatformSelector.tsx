import usePlatforms, { Platform } from '../hooks/usePlatforms';
import {
	Alert,
	CircularProgress,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';

interface Props {
	onSelectPlatform: (platform: Platform | null) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, error, isLoading } = usePlatforms();
	const selectedPlatform = data?.results.find((platform) => {
		platform.id === selectedPlatformId;
	});

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
						onClick={() => onSelectPlatform(platform)}
					>
						{platform.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default PlatformSelector;
