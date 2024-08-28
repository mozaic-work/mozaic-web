import { Button, Separator } from '@mozaic/ui'
import Image from 'next/image'
import Link from 'next/link'

// import googleLogo from '@/assets/google-logo.svg'
import logoSvg from '@/assets/logo-bgOrange-iconWhite.svg'

// import microsoftLogo from '@/assets/microsoft-logo.svg'
import { SignInForm } from './sign-in-form'

export default function Home() {
  return (
    <>
      <div>
        <Image src={logoSvg} alt="Mozaic" width={64} height={64} />
        <div className="mt-4">
          <h1 className="text-xl text-porcelain-950 font-bold">
            Welcome to Mozaic!
          </h1>
          <p className="text-sm text-porcelain-400 mt-1">
            Sign in to your account to continue
          </p>
        </div>
      </div>

      {/* <div
        className="w-full flex mt-6 gap-2.5 items-center"
        aria-label="Social login"
      >
        <Button variant="outline" size="lg" className="w-1/2">
          <Image src={googleLogo} alt="Google" width={24} height={24} />
          <span className="sr-only">Sign in with Google</span>
        </Button>

        <Button variant="outline" size="lg" className="w-1/2">
          <Image src={microsoftLogo} alt="Google" width={24} height={24} />
          <span className="sr-only">Sign in with Microsoft</span>
        </Button>
      </div> */}

      <SignInForm />

      <span className="my-6 text-porcelain-400 text-xs text-center">
        By joining you agree to the Terms of Service and Privacy Policy
      </span>

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
