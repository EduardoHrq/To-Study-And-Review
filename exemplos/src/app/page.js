import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-wrap justify-center items-center gap-5 md:hidden'>
      <Link className='w-[100px] h-[100px] flex items-center justify-center text-center bg-indigo-500 text-black font-bold rounded-3xl active:scale-75 transition-all duration-100' href={"/"}>Home</Link>
      <Link className='w-[100px] h-[100px] flex items-center justify-center text-center bg-indigo-500 text-black font-bold rounded-3xl active:scale-75 transition-all duration-100' href={"/pages/buttons"}>Buttons</Link>
      <Link className='w-[100px] h-[100px] flex items-center justify-center text-center bg-indigo-500 text-black font-bold rounded-3xl active:scale-75 transition-all duration-100' href={"/pages/inputs"}>Inputs</Link>
      <Link className='w-[100px] h-[100px] flex items-center justify-center text-center bg-indigo-500 text-black font-bold rounded-3xl active:scale-75 transition-all duration-100' href={"/pages/sociallinks"}>Social Links</Link>
      <Link className='w-[100px] h-[100px] flex items-center justify-center text-center bg-indigo-500 text-black font-bold rounded-3xl active:scale-75 transition-all duration-100' href={"/pages/loading"}>Loading</Link>
      <Link className='w-[100px] h-[100px] flex items-center justify-center text-center bg-indigo-500 text-black font-bold rounded-3xl active:scale-75 transition-all duration-100' href={"/pages/card"}>Card</Link>
      <Link className='w-[100px] h-[100px] flex items-center justify-center text-center bg-indigo-500 text-black font-bold rounded-3xl active:scale-75 transition-all duration-100' href={"/pages/boxes"}>Caixas</Link>
      <Link className='w-[100px] h-[100px] flex items-center justify-center text-center bg-indigo-500 text-black font-bold rounded-3xl active:scale-75 transition-all duration-100' href={"/pages/search"}>Search</Link>
      <Link className='w-[100px] h-[100px] flex items-center justify-center text-center bg-indigo-500 text-black font-bold rounded-3xl active:scale-75 transition-all duration-100' href={"/pages/alert"}>Alert</Link>
    </div>
  )
}
