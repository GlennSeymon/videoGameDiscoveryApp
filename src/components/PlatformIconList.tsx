import { Stack, styled } from '@mui/material';
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from 'react-icons/fa';
//import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { Platform } from '../hooks/usePlatforms';

interface Props {
	platforms: Platform[];
}

const StyledIcon = styled('p')(({ theme }) => ({
	margin: 0,
	marginRight: '5px',
	color: theme.palette.grey[500],
}));

const PlatformIconList = ({ platforms }: Props) => {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		//nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		web: BsGlobe,
		android: FaAndroid,
	};
	return (
		<Stack direction='row'>
			{platforms.map((platform) => {
				const Icon = iconMap[platform.slug];

				return <StyledIcon key={platform.id}>{Icon && <Icon />}</StyledIcon>;
			})}
		</Stack>
	);
};

export default PlatformIconList;
