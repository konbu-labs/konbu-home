import TopHeader from '@/components/top-header'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <TopHeader />
      <div className='flex flex-col items-center gap-8 flex-1 justify-center'>
        <span className='text-6xl flex font-bold bg-clip-text text-transparent bg-gradient animate-gradient bg-[-100%] bg-[length:300%_300%]'>
          Decentralized Perpetual Exchange
        </span>

        <Popover>
          <PopoverTrigger asChild>
            <Button className='text-2xl py-6 text-white'>Launch App</Button>
          </PopoverTrigger>
          <PopoverContent className='w-auto bg-white'>
            <div className='grid text-black font-medium'>Coming Soon</div>
          </PopoverContent>
        </Popover>
      </div>
    </main>
  )
}
