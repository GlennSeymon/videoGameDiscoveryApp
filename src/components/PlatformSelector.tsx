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
	onSelectPlatform: (platform: Platform) => void;
	selectedPlatform?: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error, isLoading } = usePlatforms();

	return (
		<>
			{error && <Alert severity='error'>{error?.message}</Alert>}
			{isLoading && <CircularProgress />}

			<FormControl sx={{ width: '30%' }}>
				<InputLabel id='platformLabel'>Platform</InputLabel>
				<Select labelId='platformLabel' label='Platform'>
					<MenuItem
						key='all'
						value='all'
						selected={!selectedPlatform}
						onClick={() => onSelectPlatform(null as unknown as Platform)}
					>
						All
					</MenuItem>
					{data.map((platform) => (
						<MenuItem
							key={platform.id}
							value={platform.name}
							selected={platform.id === selectedPlatform?.id}
							onClick={() => onSelectPlatform(platform)}
						>
							{platform.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
};

export default PlatformSelector;
