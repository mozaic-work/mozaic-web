import { Button, Separator } from '@mozaic/ui'
import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import logoSvg from '@/assets/logo-bgOrange-iconWhite.svg'

import { VerifyForm } from './verify-form'

export default function Verify() {
  const authInfo = getCookie('auth_info', { cookies })

  if (!authInfo) redirect('/')

  return (
    <>
      <div>
        <Image src={logoSvg} alt="Mozaic" width={64} height={64} />
        <div className="mt-4">
          <h1 className="text-xl text-porcelain-950 font-bold">
            Verify your code
          </h1>
          <p className="text-sm text-porcelain-400 mt-1">
            We sent you a code for{' '}
            <span className="text-porcelain-700 font-medium">
              {JSON.parse(authInfo)}
            </span>
          </p>
        </div>
      </div>

      <VerifyForm />

      <Separator />

      <div className="inline-flex items-center mx-auto mt-6">
        <span className="text-xs text-porcelain-400 leading-relaxed">
          Having trouble to sign in?
        </span>

        <Button variant="outline" size="sm" className="ml-4" asChild>
          <Link href="/trouble">Report</Link>
        </Button>
      </div>
    </>
  )
}
