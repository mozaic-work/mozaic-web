import { gql } from '@apollo/client'

import { httpClient } from '@/lib/apollo-client'

interface VerifyAndAuthenticateUseCaseRequest {
  email: string
  otp: string
}

interface VerifyAndAuthenticateUseCaseResponse {
  verifyUserAndAuthenticate: string
}

const VERIFY_AND_AUTHENTICATE = gql`
  mutation VerifyUserAndAuthenticate($email: String!, $otp: String!) {
    verifyUserAndAuthenticate(email: $email, otp: $otp)
  }
`

export async function verifyAndAuthenticateUseCase({
  email,
  otp,
}: VerifyAndAuthenticateUseCaseRequest): Promise<VerifyAndAuthenticateUseCaseResponse> {
  const { data } = await httpClient.mutate({
    mutation: VERIFY_AND_AUTHENTICATE,
    variables: {
      email,
      otp,
    },
  })

  return data
}
