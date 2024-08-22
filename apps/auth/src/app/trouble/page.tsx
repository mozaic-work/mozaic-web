import { Button, Label, RadioGroup, RadioGroupItem } from '@mozaic/ui'
import Image from 'next/image'
import Link from 'next/link'

import logoSvg from '@/assets/logo-bgOrange-iconWhite.svg'

export default function ForgotPassword() {
  return (
    <>
      <div>
        <Image src={logoSvg} alt="Mozaic" width={64} height={64} />
        <div className="mt-4">
          <h1 className="text-xl text-porcelain-950 font-bold">
            Trouble to sign in
          </h1>
          <p className="text-sm text-porcelain-400 mt-1">
            We are very sorry to hear that. Tell us what is going on
          </p>
        </div>
      </div>

      <form className="w-full flex mt-6 flex-col gap-6">
        <div className="flex flex-col">
          <RadioGroup className="space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">I can&apos;t remember my e-mail</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">
                I am clicking to sign in but nothing happens
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Sign in is taking forever</Label>
            </div>

            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <Button>Report</Button>
      </form>

      <Button
        variant="link"
        className="font-normal text-porcelain-400 mt-4"
        asChild
      >
        <Link href="/">Go back to sign in</Link>
      </Button>
    </>
  )
}
