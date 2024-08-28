'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from '@mozaic/ui'
import { deleteCookie, getCookie, setCookie } from 'cookies-next'
import { Loader2 } from 'lucide-react'
import { useCallback, useEffect, useState, useTransition } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { verifyAndAuthenticateUseCase } from '@/infra/use-cases/verify-and-authenticate'

import { resendCodeAction } from './actions'

const verifyAndAuthenticateSchemaValidation = z.object({
  otp: z
    .string()
    .min(6, { message: 'You must add the OTP sent to your email' })
    .max(6),
})

type VerifyAndAuthenticateSchema = z.infer<
  typeof verifyAndAuthenticateSchemaValidation
>

export function VerifyForm() {
  const [countdown, setCountdown] = useState(0)
  const [isDisabled, setIsDisabled] = useState(false)

  const [isPending, startTransition] = useTransition()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyAndAuthenticateSchema>({
    resolver: zodResolver(verifyAndAuthenticateSchemaValidation),
    defaultValues: {
      otp: '',
    },
  })

  const handleLockResendCodeButton = useCallback(() => {
    setIsDisabled(true)
    setCountdown(60)

    const now = new Date().getTime()
    const nextChanceTime = new Date(now + 60 * 1000).toISOString()

    setCookie('resend_code_in', JSON.stringify(nextChanceTime), {
      expires: new Date(now + 60 * 1000), // expires after 1 minute
      path: '/',
    })

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsDisabled(false)
          deleteCookie('resend_code_in')
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [isDisabled])

  const onSubmit = useCallback(async ({ otp }: VerifyAndAuthenticateSchema) => {
    try {
      const email = getCookie('auth_info')

      if (email) {
        startTransition(async () => {
          const { verifyUserAndAuthenticate: accessToken } =
            await verifyAndAuthenticateUseCase({
              email: JSON.parse(email),
              otp,
            })

          window.location.href = `${process.env.NEXT_PUBLIC_MOZAIC_DASHBOARD}?access_token=${accessToken}`
        })
      }
    } catch (err) {
      console.error('handle validation errors', err)
    }
  }, [])

  useEffect(() => {
    const resendTime = getCookie('resend_code_in') as string

    if (resendTime) {
      const now = new Date().getTime()
      const nextChanceTime = new Date(JSON.parse(resendTime)).getTime()
      const timeLeft = Math.max(0, Math.floor((nextChanceTime - now) / 1000))

      if (timeLeft > 0) {
        setIsDisabled(true)
        setCountdown(timeLeft)
      }
    }

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setIsDisabled(false)
          deleteCookie('resend_code_in')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [countdown])

  return (
    <>
      <form
        id="verify-form"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex my-6 flex-col gap-6"
      >
        <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}
        />

        {errors?.otp && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.otp?.message}
          </p>
        )}

        <Button type="submit" disabled={isPending}>
          {isPending ? <Loader2 className="size-4" /> : 'Validate'}
        </Button>
      </form>

      <form
        action={resendCodeAction}
        className="mx-auto inline-flex items-center"
      >
        <span className="text-porcelain-400 text-sm">
          Did not receive your code?
        </span>
        <Button
          type="submit"
          variant="link"
          className="text-scarlet-400 underline font-normal"
          onClick={handleLockResendCodeButton}
          disabled={isDisabled}
        >
          {isDisabled ? `Resend in ${countdown}s` : 'Resend'}
        </Button>
      </form>
    </>
  )
}
