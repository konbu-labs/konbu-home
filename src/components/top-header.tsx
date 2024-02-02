import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'

export default function TopHeader() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl items-center'>
        <div className='mr-4 hidden md:flex'>
          <a
            className='mr-6 flex items-center space-x-2'
            href='/'
          >
            <Image
              src='/konbu.svg'
              alt='logo'
              width={20}
              height={20}
            ></Image>
            <span className='hidden font-bold sm:inline-block'>konbu</span>
          </a>
        </div>
        <div className='flex flex-1 items-center justify-between md:justify-end'>
          <nav className='flex items-center space-x-2'>
            <a
              target='_blank'
              rel='noreferrer'
              href='/'
            >
              <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0'>
                <svg
                  className='h-3 w-3 fill-current'
                  height='23'
                  viewBox='0 0 1200 1227'
                  width='23'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z'></path>
                </svg>
                <span className='sr-only'>Twitter</span>
              </div>
            </a>

            <a
              target='_blank'
              rel='noreferrer'
              href='/'
            >
              <div className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0'>
                <FaDiscord size={20} />
              </div>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
