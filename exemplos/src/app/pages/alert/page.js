'use client';

import './style.css'

import AlertPop from "@/app/components/alert";

export default function Alert() {


  function show(pop) {

    let popup = document.getElementById("pop" + pop)
    let areaPop = document.getElementById("areaPop" + pop)

    switch (pop) {
      case 1:
        popup.style.zIndex = "999"
        areaPop.style.scale = "1"
        popup.style.opacity = "1"
        break
      case 2:
        popup.style.zIndex = "999"
        areaPop.style.scale = "1"
        popup.style.opacity = "1"
        break
      case 3:
        popup.style.zIndex = "999"
        areaPop.style.scale = "1"
        popup.style.opacity = "1"
        popup.style.boxShadow = "inset 0 0 500px 50px #000"
        break
      case 4:
        popup.style.zIndex = "999"
        document.getElementById("sombra").style.scale = 1
        popup.style.opacity = "1"
        document.getElementById("sombra").style.boxShadow = "0 0 0 4px #6366f1,0 0 1000px 100px #000"
    }
  }

  function fechar(num) {
    let popup = document.getElementById("pop" + num)
    let areaPop = document.getElementById("areaPop" + num)

    switch (num) {
      case 1:
        areaPop.style.scale = ".2"
        popup.style.opacity = "0"
        popup.style.zIndex = "-1"
        break
      case 2:
        areaPop.style.scale = ".2"
        popup.style.opacity = "0"
        popup.style.zIndex = "-1"
        break
      case 3:
        areaPop.style.scale = ".2"
        popup.style.opacity = "0"
        popup.style.zIndex = "-1"
        popup.style.boxShadow = "inset 0 0 0 0 #000"
        break
      case 4:
        document.getElementById("sombra").style.scale = ".2"
        popup.style.opacity = "0"
        popup.style.zIndex = "-1"
        document.getElementById("sombra").style.boxShadow = "0 0 0 0 #6366f1,0 0 0 0 #000"
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <AlertPop />

      <div id='pop1' className="fixed bg-black w-[100vw] h-[100vh] bottom-0 flex justify-center items-center popup transition-all duration-700 ">
        <div id='areaPop1' className="areaPop shadow-[0_0_0_4px] shadow-indigo-500 rounded-xl transition-all duration-700">
          <AlertPop click={() => fechar(1)} />
        </div>
      </div>

      <div id='pop2' className="fixed bg-black bg-opacity-80 w-[100vw] h-[100vh] bottom-0 flex justify-center items-center popup transition-all duration-700  ">
        <div id='areaPop2' className="areaPop shadow-[0_0_0_4px] shadow-indigo-500 rounded-xl transition-all duration-700">
          <AlertPop click={() => fechar(2)} />
        </div>
      </div>

      <div id='pop3' className="fixed w-[100vw] h-[100vh] bottom-0 flex justify-center items-center popup transition-all duration-700">
        <div id='areaPop3' className="areaPop shadow-[0_0_0_4px] shadow-indigo-500 rounded-xl transition-all duration-700">
          <AlertPop click={() => fechar(3)} />
        </div>
      </div>

      <div id='pop4' className="fixed w-[100vw] h-[100vh] bottom-0 flex justify-center items-center popup transition-all duration-700">
        <div id='sombra' className="rounded-xl transition-all duration-1000">
          <AlertPop click={() => fechar(4)} />
        </div>
      </div>

      <button onClick={() => { show(1) }} className="bg-indigo-500 p-3 rounded-xl hover:shadow-[inset_0_0_0_4px_#000,0_0_0_2px_#6366f1] transition-all duration-300 active:scale-50">mostrar alert1</button>
      <button onClick={() => { show(2) }} className="bg-indigo-500 p-3 rounded-xl hover:shadow-[inset_0_0_0_4px_#000,0_0_0_2px_#6366f1] transition-all duration-300 active:scale-50">mostrar alert2</button>
      <button onClick={() => { show(3) }} className="bg-indigo-500 p-3 rounded-xl hover:shadow-[inset_0_0_0_4px_#000,0_0_0_2px_#6366f1] transition-all duration-300 active:scale-50">mostrar alert3</button>
      <button onClick={() => { show(4) }} className="bg-indigo-500 p-3 rounded-xl hover:shadow-[inset_0_0_0_4px_#000,0_0_0_2px_#6366f1] transition-all duration-300 active:scale-50">mostrar alert4</button>
    </div>
  )
}