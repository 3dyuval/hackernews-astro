import { FeedQuery } from '../queries/FeedQuery.ts'

export default function Feed({feed}: any) {
	// const links = Object.entries(feed)
	return <For each={feed}>{( link ) => JSON.stringify(link, null, 2)}</For>
}
