import { Client, fetchExchange, cacheExchange } from '@urql/core'

const client = new Client({
	url: import.meta.env.VITE_GRAPHQL_ENDPOINT as string,
	exchanges: [cacheExchange, fetchExchange],
})

export default client
export { gql } from '@urql/core'
