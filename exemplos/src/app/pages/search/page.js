'use client';
import './style.css'

export default function Search() {

  function hover() {
    let search = document.getElementById("searchHover")

    search.style.boxShadow = "inset -300px 0 100px 0 #6366f1"
    search.style.color = "#fff"

  }


  function sair() {
    let search = document.getElementById("searchHover")

    search.style.boxShadow = "inset 0 0 0 0 #6366f1"
    search.style.color = "#000"

  }

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-y-10">
      <div className="flex items-center mx-auto">
        <input type="text" className="p-3 border-none outline-none text-center rounded-l-xl  " />
        <button className="bg-indigo-500 h-[50px] w-[50px] rounded-r-xl ">go</button>
      </div>

      <div className="flex items-center mx-auto">
        <input type="text" className="p-3 border-none outline-none text-center rounded-l-3xl  " />
        <button className="bg-indigo-500 h-[50px] w-[50px] rounded-r-3xl  ">go</button>
      </div>

      <div className="flex items-center mx-auto">
        <div className="relative search3">
          <input type="text" className="py-3 px-16 border-none outline-none text-center rounded-3xl transition-all duration-300 " />
          <button className="bg-indigo-500 h-[50px] rounded-3xl w-[50px] absolute right-0 transition-all duration-300  ">go</button>
        </div>
      </div>

      <div className="flex items-center mx-auto search4">
        <input type="text" className="border-none outline-none text-center rounded-l-3xl transition-all duration-300 " />
        <button className="bg-indigo-500 h-[50px] w-[50px] rounded-r-3xl transition-all duration-300 ">go</button>
      </div>

      <div className="flex items-center mx-auto bg-zinc-200 rounded-3xl search5">
        <input type="text" className="bg-zinc-200  border-none outline-none text-center rounded-l-3xl transition-all duration-300 " />
        <button className="bg-indigo-500 h-[50px] w-[50px] rounded-r-3xl transition-all duration-300 ">go</button>
      </div>

      <div className="flex items-center mx-auto search6">
        <input type="text" className="p-3 border-none outline-none text-center rounded-l-3xl " />
        <button className="bg-indigo-500 h-[50px] w-[50px] rounded-r-3xl  ">go</button>
      </div>

      <div className="flex items-center mx-auto">
        <input id='searchHover' type="text" className="p-3 border-none outline-none text-center rounded-l-3xl " />
        <button id='btHover' onMouseEnter={hover} onMouseLeave={sair} className="bg-indigo-500 h-[50px] w-[50px] rounded-r-3xl  ">go</button>
      </div>

    </div>
  )
}