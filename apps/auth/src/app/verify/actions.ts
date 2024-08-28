'use server'

import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'

import { signInWithEmailUseCase } from '@/infra/use-cases/sign-in-with-email'

export async function resendCodeAction() {
  try {
    const email = getCookie('auth_info', { cookies })

    const { authenticateWithEmail: success } = await signInWithEmailUseCase({
      email: JSON.parse(email as string),
    })

    return {
      success,
      message: null,
      errors: null,
    }
  } catch (err) {
    console.error('Failed to resend code: ', err)
    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes',
      errors: null,
    }
  }
}
