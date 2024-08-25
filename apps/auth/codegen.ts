import 'dotenv/config'

import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: `http://localhost:8000/graphql`,
  documents: './src/infra/use-cases/*.{ts,tsx}',
  overwrite: true,
  generates: {
    './src/infra/types.ts': {
      plugins: [
        'typescript',
        'typescript-react-apollo',
        'typescript-operations',
      ],
      config: {
        defaultBaseOptions: {
          context: { clientName: 'inboxLink' },
        },
        withMutationFn: true,
        withHOC: false,
        withHooks: true,
        withComponent: false,
      },
    },
  },
}

export default config
