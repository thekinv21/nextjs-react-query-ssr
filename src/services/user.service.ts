import { TUser } from '../types'
import { axiosClassic } from './axios/axios'

class UserService {
	private USER_BASE_URL = `https://jsonplaceholder.typicode.com/users`

	async getAll() {
		const response = await axiosClassic.get<TUser[]>(`${this.USER_BASE_URL}`)
		return response?.data
	}
}

export const userService = new UserService()
