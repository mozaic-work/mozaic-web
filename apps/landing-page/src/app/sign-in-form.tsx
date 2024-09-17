'use client'

import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  Input,
  Label,
} from '@mozaic/ui'
import { AlertTriangle, Loader2 } from 'lucide-react'

import { useFormState } from '@/hooks/useFormState'
import { AUTH_STEP, useAuthStore } from '@/store/auth'

import { signInWithEmailAction } from './actions'

export function SignInForm() {
  const { setStep } = useAuthStore()

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAction,
    () => {
      setStep(AUTH_STEP.PENDING_CODE)
    },
  )

  return (
    <form
      className="w-full flex flex-col mt-6 space-y-6"
      onSubmit={handleSubmit}
      noValidate
    >
      {!success && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Uh oh...</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="e.g. johndoe@example.com"
        />

        {errors?.email && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.email[0]}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? <Loader2 className="size-4 animate-spin" /> : 'Sign in'}
      </Button>
    </form>
  )
}
