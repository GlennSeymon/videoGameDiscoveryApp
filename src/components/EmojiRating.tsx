import bullsEye from '../assets/Emojis/bulls-eye.webp';
import meh from '../assets/Emojis/meh.webp';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';

interface Props {
	rating: number;
}

const EmojiRating = ({ rating }: Props) => {
	const emojiRatingMap: {
		[key: number]: React.ImgHTMLAttributes<HTMLImageElement>;
	} = {
		3: { src: meh, alt: 'meh', height: '25px', width: '25px' },
		4: { src: thumbsUp, alt: 'thumbs-up', height: '25px', width: '25px' },
		5: { src: bullsEye, alt: 'bullseye', height: '35px', width: '35px' },
	};

	return <img {...emojiRatingMap[rating]} />;
};

export default EmojiRating;
