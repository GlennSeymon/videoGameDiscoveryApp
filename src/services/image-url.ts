import noIMage from '../assets/no-image-placeholder-6f3882e0.webp';

const getCroppedImageUrl = (url: string) => {
	const target = 'media/';

	try {
		const index = url.indexOf(target) + target.length;
		return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
	} catch {
		return noIMage;
	}
};

export default getCroppedImageUrl;
