import axios, { type CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: process.env.NEXT_PUBLIC_URL_PROD,
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
}

const axiosClassic = axios.create(options)

export { axiosClassic }
