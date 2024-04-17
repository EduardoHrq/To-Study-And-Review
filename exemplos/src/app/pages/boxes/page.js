import './style.css'

import Box from "@/app/components/box";

export default function Boxes() {
  return (

    <div className="">
      <div className='box1 flex flex-wrap items-center justify-center gap-5'>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>

  )
}