import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
	count: number;
	next: string;
	previous: string;
	results: T[];
}

export interface FetchGameResponse {
	id: number;
	slug: string;
	name: string;
	description: string;
	background_image: string;
}

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'b5616a484e594c668e0afeb6a3205c73', // Here for demo purposes only.
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config?: AxiosRequestConfig) => {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};

	get = (id: number | string | undefined) => {
		return axiosInstance
			.get<T>(this.endpoint + '/' + id)
			.then((res) => res.data);
	};

	post = (data: T) => {
		return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
	};
}

export default APIClient;
