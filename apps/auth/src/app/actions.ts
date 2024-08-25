'use server'

import { setCookie } from 'cookies-next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { z } from 'zod'

import { signInWithEmailUseCase } from '@/infra/use-cases/sign-in-with-email'

const signInWithEmailSchema = z.object({
  email: z.string().email(),
})

export async function signInWithEmailAction(data: FormData) {
  const result = signInWithEmailSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors

    return {
      success: false,
      message: null,
      errors,
    }
  }

  const { email } = result.data

  try {
    await signInWithEmailUseCase({
      email,
    })

    setCookie('auth_info', JSON.stringify(email), { cookies, path: '/' })
  } catch (err) {
    // TODO: change this log
    console.error('Failed to authenticate user', err)
    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes',
      errors: null,
    }
  }

  redirect('/verify')
}
