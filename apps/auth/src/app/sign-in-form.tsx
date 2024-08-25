'use client'

import { Button, Input, Label } from '@mozaic/ui'
import { Loader2 } from 'lucide-react'

import { useFormState } from '@/hooks/useFormState'
import { AUTH_STEP, useAuthStore } from '@/store/auth'

import { signInWithEmailAction } from './actions'

export function SignInForm() {
  const { step, setStep } = useAuthStore()

  const [, handleSubmit, isPending] = useFormState(
    signInWithEmailAction,
    () => {
      setStep(AUTH_STEP.PENDING_CODE)
    },
  )

  if (step === AUTH_STEP.PENDING_CODE) return <h2>enter your code :D</h2>

  return (
    <form
      className="w-full flex mt-6 flex-col gap-6"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="e.g. johndoe@example.com"
        />
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? <Loader2 className="size-4 animate-spin" /> : 'Sign in'}
      </Button>
    </form>
  )
}
