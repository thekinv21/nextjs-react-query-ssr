import { TPost } from '../types'
import { axiosClassic } from './axios/axios'

class PostService {
	private POST_BASE_URL = `https://jsonplaceholder.typicode.com/posts`

	async getAll() {
		const response = await axiosClassic.get<TPost[]>(`${this.POST_BASE_URL}`)
		return response?.data
	}
}

export const postService = new PostService()
