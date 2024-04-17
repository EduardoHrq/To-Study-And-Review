import './style.css'

import CardF from "../../components/cardB"
import CardB from "../../components/cardF"

export default function Card() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap justify-evenly gap-5 p-2">
        <div className="hover:scale-105 transition-all duration-300">
          <CardF />
        </div>
        <div className="hover:scale-105 transition-all duration-300">
          <CardB />
        </div>
      </div>

      <div className="h-[300px] w-[500px] m-auto flex items-center justify-center relative area">

        <div className="front rounded-xl  absolute ">
          <CardF />
        </div>
        <div className="back rounded-xl absolute  ">
          <CardB />
        </div>

      </div>
    </div>
  )
}