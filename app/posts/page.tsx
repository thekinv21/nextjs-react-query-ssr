import { postService, userService } from '@/src/services'
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query'
import { PostList } from './PostList'

export default async function PostsPage() {
	const queryClient: QueryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['posts'],
		queryFn: () => postService.getAll(),
	})

	await queryClient.prefetchQuery({
		queryKey: ['users'],
		queryFn: () => userService.getAll(),
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<PostList />
		</HydrationBoundary>
	)
}
