import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'b5616a484e594c668e0afeb6a3205c73', // Here for demo purposes only.
	},
});
