import gql from 'graphql-tag'

export const FeedQuery = gql`
	query FeedQuery {
		feed {
			id
			url
			description
			createdAt
		}
	}
`
