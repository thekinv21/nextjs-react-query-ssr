'use client'

import { postService, userService } from '@/src/services'
import { TPost, TUser } from '@/src/types'
import { useQuery } from '@tanstack/react-query'

export function PostList() {
	const { data: posts } = useQuery({
		queryKey: ['posts'],
		queryFn: () => postService.getAll(),
	})

	const { data: users } = useQuery({
		queryKey: ['users'],
		queryFn: () => userService.getAll(),
	})

	return (
		<>
			<div>
				<h2>Posts</h2>
				<ul>
					{posts?.slice(0, 5).map((post: TPost) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>

			<div>
				<h2>Users</h2>
				<ul>
					{users?.slice(0, 5).map((user: TUser) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			</div>
		</>
	)
}
