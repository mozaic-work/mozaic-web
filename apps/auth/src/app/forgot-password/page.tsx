import Image from 'next/image'
import Link from 'next/link'

import logoSvg from '@/assets/logo-bgOrange-iconWhite.svg'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

export default function ForgotPassword() {
  return (
    <>
      <div>
        <Image src={logoSvg} alt="Mozaic" width={64} height={64} />
        <div className="mt-4">
          <h1 className="text-xl text-porcelain-950 font-bold">
            Forgot my password
          </h1>
          <p className="text-sm text-porcelain-400 mt-1">
            Enter your email to continue
          </p>
        </div>
      </div>

      <form className="w-full flex mt-6 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="e.g. johndoe@example.com"
          />
        </div>

        <Button>Reset my password</Button>
      </form>

      <Separator className="my-6" />

      <div className="inline-flex items-center mx-auto">
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
