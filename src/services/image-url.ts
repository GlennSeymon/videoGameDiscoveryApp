const getCroppedImageUrl = (url: string) => {
	const target = 'media/';

	try {
		const index = url.indexOf(target) + target.length;
		return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
	} catch {
		return '';
	}
};

export default getCroppedImageUrl;
