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
	selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error, isLoading } = usePlatforms();

	if (error) return <Alert severity='error'>{error?.message}</Alert>;
	if (isLoading) return <CircularProgress />;

	return (
		<FormControl sx={{ width: '30%' }}>
			<InputLabel id='platformLabel'>Platform</InputLabel>
			<Select
				labelId='platformLabel'
				label='Platform'
				value={selectedPlatform?.name ?? ''}
			>
				{data?.results.map((platform) => (
					<MenuItem
						key={platform.id}
						value={platform.name}
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
