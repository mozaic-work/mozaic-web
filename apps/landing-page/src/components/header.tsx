import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-8 py-4">
      <div className="relative mx-auto flex flex-row justify-center rounded-full border p-2 shadow-sm backdrop-blur transition-colors lg:w-fit bg-background/80">
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          className="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:block"
        >
          <div>
            <ul
              data-orientation="horizontal"
              className="group flex flex-1 list-none items-center justify-center space-x-1"
              dir="ltr"
            >
              <li>
                <Link
                  title="brand-logo"
                  href="/"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  <svg
                    width="32"
                    height="23"
                    viewBox="0 0 32 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8116 0.458924C11.1568 -0.195093 12.1116 -0.137875 12.3762 0.552682L15.9907 9.98551C16.066 10.1821 16.0666 10.3994 15.9925 10.5964L11.907 21.4579C11.7808 21.7934 11.46 22.0155 11.1016 22.0155H0.861721C0.213719 22.0155 -0.201793 21.3264 0.100668 20.7533L10.8116 0.458924Z"
                      fill="black"
                    />
                    <path
                      d="M21.1884 0.458924C20.8432 -0.195093 19.8884 -0.137875 19.6238 0.552682L16.0093 9.98551C15.934 10.1821 15.9334 10.3994 16.0075 10.5964L20.093 21.4579C20.2192 21.7934 20.54 22.0155 20.8984 22.0155H31.1383C31.7863 22.0155 32.2018 21.3264 31.8993 20.7533L21.1884 0.458924Z"
                      fill="black"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <a
                  href="/landing#solution"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="/landing#benefits"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="/landing#how-it-works"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="https://www.aomni.com/pricing"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div className="absolute left-0 top-full flex justify-center"></div>
        </nav>
        <div className="hidden lg:flex items-center gap-1">
          <a
            aria-label="Visit Home"
            className="focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 font-semibold drop-shadow-[0_4px_2px_-3px_hsla(0,0%,0%,0.25)] ml-4 relative overflow-hidden transition-colors duration-300 rounded-full shadow-none text-"
            href="https://www.aomni.com/app?register=true"
          >
            <span className="relative z-10">Log in</span>
          </a>

          <a
            aria-label="Visit Home"
            className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 font-semibold drop-shadow-[0_4px_2px_-3px_hsla(0,0%,0%,0.25)] relative overflow-hidden transition-colors duration-300 rounded-full shadow-none bg-black text-white hover:bg-black/80"
            href="https://www.aomni.com/app?register=true"
          >
            <span className="relative z-10">Get Started</span>
            <div className=" absolute inset-0 bg-gradient-to-t from-[hsla(0,0%,100%,0)] from-50% to-[hsla(0,0%,100%,0.1)] to-50% opacity-50 "></div>
          </a>
        </div>
        <div className="flex w-full flex-1 flex-row items-center justify-between px-4 lg:hidden">
          <Link
            href="/"
            title="brand-logo"
            className="relative mr-6 flex items-center space-x-2"
          >
            <svg
              width="32"
              height="23"
              viewBox="0 0 32 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8116 0.458924C11.1568 -0.195093 12.1116 -0.137875 12.3762 0.552682L15.9907 9.98551C16.066 10.1821 16.0666 10.3994 15.9925 10.5964L11.907 21.4579C11.7808 21.7934 11.46 22.0155 11.1016 22.0155H0.861721C0.213719 22.0155 -0.201793 21.3264 0.100668 20.7533L10.8116 0.458924Z"
                fill="black"
              />
              <path
                d="M21.1884 0.458924C20.8432 -0.195093 19.8884 -0.137875 19.6238 0.552682L16.0093 9.98551C15.934 10.1821 15.9334 10.3994 16.0075 10.5964L20.093 21.4579C20.2192 21.7934 20.54 22.0155 20.8984 22.0155H31.1383C31.7863 22.0155 32.2018 21.3264 31.8993 20.7533L21.1884 0.458924Z"
                fill="black"
              />
            </svg>

            <span className="text-xl font-bold">mozaic</span>
          </Link>
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R4s6fnnhja:"
            data-state="closed"
            aria-label="Open Menu"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
