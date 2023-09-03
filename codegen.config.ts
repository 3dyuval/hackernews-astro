import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: '../hackernews-nestjs/src/schema.gql',
  generates: {
    './src/generated/': {
      documents: ['./src/**/*.tsx'],
      plugins: ['typescript'],
      preset: 'client-preset',
    },
    './src/generated/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
