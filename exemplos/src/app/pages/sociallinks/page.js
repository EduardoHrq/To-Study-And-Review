import './style.css'

import Image from "next/image";

export default function SLinks() {
  return (
    <div className='w-full flex flex-col justify-center gap-5 absolute'>
      <div className="flex items-center justify-evenly     ">
        <div className="img icon">
          <Image src={"/linkedin.png"} width={100} height={100} />
        </div>
        <div className="img icon">
          <Image src={"/whatsapp.png"} width={100} height={100} />
        </div>
        <div className="img icon">
          <Image src={"/instagram.png"} width={100} height={100} />
        </div>
        <div className="img icon">
          <Image src={"/github.png"} width={100} height={100} />
        </div>
      </div>

      <div className="flex items-center justify-evenly relative    ">
        <div className="img icon2">
          <Image src={"/linkedin.png"} width={100} height={100} />
        </div>
        <div className="img icon2">
          <Image src={"/whatsapp.png"} width={100} height={100} />
        </div>
        <div className="img icon2">
          <Image src={"/instagram.png"} width={100} height={100} />
        </div>
        <div className="img icon2">
          <Image src={"/github.png"} width={100} height={100} />
        </div>
      </div>

      <div className='planet w-[50px] h-[50px]    '>

      </div>
    </div>
  )
}