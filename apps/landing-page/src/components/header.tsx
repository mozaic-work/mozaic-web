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
                <a
                  title="brand-logo"
                  href="/"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  <svg
                    width="42"
                    height="32"
                    viewBox="0 0 42 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[20px] w-auto"
                  >
                    <path
                      d="M14.9712 2.62554V13.5498C14.972 14.0425 15.1187 14.524 15.3928 14.9334L27.1533 30.1111C27.4183 30.5096 27.7783 30.8359 28.2009 31.0605C28.6235 31.285 29.0953 31.4009 29.5739 31.3976H39.7059C39.9686 31.3979 40.2288 31.3464 40.4716 31.2461C40.7144 31.1457 40.935 30.9985 41.1208 30.8129C41.3067 30.6272 41.4541 30.4067 41.5547 30.1641C41.6553 29.9214 41.7071 29.6613 41.7071 29.3986V18.6788C41.7082 18.0464 41.5208 17.428 41.1687 16.9027L29.3891 1.68842C29.1679 1.35408 28.8672 1.07987 28.514 0.890367C28.1607 0.700864 27.766 0.601995 27.3651 0.602627H16.9904C16.7243 0.600134 16.4604 0.650795 16.2141 0.75164C15.9679 0.852485 15.7442 1.00148 15.5563 1.1899C15.3684 1.37831 15.22 1.60235 15.1198 1.84887C15.0196 2.0954 14.9696 2.35945 14.9728 2.62554H14.9712Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M13.2699 16.9121H1.80139C1.60334 16.9119 1.40718 16.9507 1.22414 17.0264C1.04111 17.1021 0.874784 17.2131 0.734687 17.3531C0.594589 17.4931 0.483465 17.6593 0.407671 17.8423C0.331878 18.0253 0.292901 18.2214 0.292971 18.4195V29.8879C0.292622 30.086 0.331305 30.2821 0.406807 30.4652C0.48231 30.6482 0.593152 30.8146 0.732997 30.9548C0.872841 31.095 1.03895 31.2062 1.22181 31.2822C1.40468 31.3581 1.60073 31.3973 1.79874 31.3974H13.2699C13.6695 31.3974 14.0528 31.2387 14.3354 30.9561C14.6179 30.6735 14.7767 30.2902 14.7767 29.8906V18.4221C14.7771 18.224 14.7383 18.0277 14.6628 17.8446C14.5872 17.6614 14.4763 17.495 14.3363 17.3547C14.1964 17.2145 14.0302 17.1032 13.8472 17.0273C13.6642 16.9513 13.468 16.9122 13.2699 16.9121Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
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
                  href="/landing#integrations"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active]:bg-primary/10 data-[state=open]:bg-primary/10 group inline-flex h-10 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  data-radix-collection-item=""
                >
                  Blog
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
        <div className="hidden lg:block">
          <a
            aria-label="Visit Home"
            className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 font-semibold drop-shadow-[0_4px_2px_-3px_hsla(0,0%,0%,0.25)] relative overflow-hidden transition-colors duration-300 ml-3 rounded-full shadow-none bg-black text-white hover:bg-black/80"
            href="https://www.aomni.com/app?register=true"
          >
            <span className="relative z-10">Get Started</span>
            <div className=" absolute inset-0 bg-gradient-to-t from-[hsla(0,0%,100%,0)] from-50% to-[hsla(0,0%,100%,0.1)] to-50% opacity-50 "></div>
          </a>
        </div>
        <div className="flex w-full flex-1 flex-row items-center justify-between px-4 lg:hidden">
          <a
            href="/"
            title="brand-logo"
            className="relative mr-6 flex items-center space-x-2"
          >
            <svg
              width="42"
              height="32"
              viewBox="0 0 42 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
            >
              <path
                d="M14.9712 2.62554V13.5498C14.972 14.0425 15.1187 14.524 15.3928 14.9334L27.1533 30.1111C27.4183 30.5096 27.7783 30.8359 28.2009 31.0605C28.6235 31.285 29.0953 31.4009 29.5739 31.3976H39.7059C39.9686 31.3979 40.2288 31.3464 40.4716 31.2461C40.7144 31.1457 40.935 30.9985 41.1208 30.8129C41.3067 30.6272 41.4541 30.4067 41.5547 30.1641C41.6553 29.9214 41.7071 29.6613 41.7071 29.3986V18.6788C41.7082 18.0464 41.5208 17.428 41.1687 16.9027L29.3891 1.68842C29.1679 1.35408 28.8672 1.07987 28.514 0.890367C28.1607 0.700864 27.766 0.601995 27.3651 0.602627H16.9904C16.7243 0.600134 16.4604 0.650795 16.2141 0.75164C15.9679 0.852485 15.7442 1.00148 15.5563 1.1899C15.3684 1.37831 15.22 1.60235 15.1198 1.84887C15.0196 2.0954 14.9696 2.35945 14.9728 2.62554H14.9712Z"
                fill="currentColor"
              ></path>
              <path
                d="M13.2699 16.9121H1.80139C1.60334 16.9119 1.40718 16.9507 1.22414 17.0264C1.04111 17.1021 0.874784 17.2131 0.734687 17.3531C0.594589 17.4931 0.483465 17.6593 0.407671 17.8423C0.331878 18.0253 0.292901 18.2214 0.292971 18.4195V29.8879C0.292622 30.086 0.331305 30.2821 0.406807 30.4652C0.48231 30.6482 0.593152 30.8146 0.732997 30.9548C0.872841 31.095 1.03895 31.2062 1.22181 31.2822C1.40468 31.3581 1.60073 31.3973 1.79874 31.3974H13.2699C13.6695 31.3974 14.0528 31.2387 14.3354 30.9561C14.6179 30.6735 14.7767 30.2902 14.7767 29.8906V18.4221C14.7771 18.224 14.7383 18.0277 14.6628 17.8446C14.5872 17.6614 14.4763 17.495 14.3363 17.3547C14.1964 17.2145 14.0302 17.1032 13.8472 17.0273C13.6642 16.9513 13.468 16.9122 13.2699 16.9121Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-xl font-bold">aomni</span>
          </a>
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
        <div className="absolute inset-0 my-1.5 rounded-full bg-secondary"></div>
      </div>
    </header>
  )
}
