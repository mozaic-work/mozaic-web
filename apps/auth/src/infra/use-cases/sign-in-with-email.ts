import { gql } from '@apollo/client'

import { httpClient } from '@/lib/apollo-client'

interface SignInWithEmailUseCaseRequest {
  email: string
}

interface SignInWithEmailUseCaseResponse {
  authenticateWithEmail: boolean
}

const AUTHENTICATE_WITH_EMAIL_MUTATION = gql`
  mutation Mutation($email: String!) {
    authenticateWithEmail(email: $email)
  }
`

export async function signInWithEmailUseCase({
  email,
}: SignInWithEmailUseCaseRequest): Promise<SignInWithEmailUseCaseResponse> {
  const { data } = await httpClient.mutate({
    mutation: AUTHENTICATE_WITH_EMAIL_MUTATION,
    variables: {
      email,
    },
  })

  return data
}
