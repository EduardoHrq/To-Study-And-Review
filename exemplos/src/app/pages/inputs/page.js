'use client';
import IMask from 'imask';
import './style.css'
import { useEffect } from 'react';

export default function Inputs() {

  function mudar() {
    let valor = document.getElementById("ipt5").value.length

    if (valor > 0) {
      document.getElementById("lb5").style.top = "-5px";
    } else {
      document.getElementById("lb5").style.top = "50%";
    }
  }

  useEffect(() => {
    console.log("ok")

    let element = document.getElementById('ipt8')
    element.style.letterSpacing = ".1rem"
    IMask(element, {
      mask: '0000  0000  0000  0000',
    })

    let element2 = document.getElementById('ipt9')
    IMask(element2, {
      mask: '00000-000',
    })

    let element3 = document.getElementById('ipt10')
    IMask(element3, {
      mask: '00 {/} 00 {/] 0000',
    })

    let element4 = document.getElementById('ipt11')
    element4.style.letterSpacing = ".1rem"
    IMask(element4, {
      mask: '000.000.000-00',
    })
  }, [])

  function concatNum(num) {
    let res = document.getElementById("iptConcat").value

    document.getElementById("iptConcat").value += num
  }

  return (
    <div className='flex flex-col gap-6'>

      <details className=' transition-all duration-200 '>
        <summary className='text-center bg-indigo-500 transition-all duration-200 p-5 rounded-xl text-white'>Texts</summary>

        <div className='p-5 shadow-[0_0_2px_.1px] shadow-zinc-500 rounded-xl flex flex-col md:grid md:grid-cols-3 gap-10'>

          <input placeholder='Texto' type="text" className="border-none outline-none p-3 rounded-xl text-center" />

          <input placeholder='Texto' type="text" className="border-none outline-none p-3 rounded-3xl text-center" />

          <input placeholder='Texto' type="text" className="border-none outline-none p-3 rounded-3xl text-center hover:rounded-xl transition-all duration-200 focus:rounded-xl" />

          <input placeholder='Texto' id='ipt1' type="text" className="border-none outline-none p-3 text-center rounded-xl transition-all duration-200  " />

          <input placeholder='Texto' id='ipt2' type="text" className="bg-transparent border-none outline-none p-3 text-center transition-all duration-200  " />

          <input placeholder='Texto' type="text" className="bg-transparent border-b-2 outline-none p-3 text-center transition-all duration-200 caret-zinc-300 text-white" />

          <div className='flex justify-center'>
            <label className='p-3 bg-zinc-500 rounded-l-xl ' htmlFor="ipt3">TEXTO</label>
            <input placeholder='Texto' id='ipt3' type="text" className="border-none outline-none p-3 text-center rounded-r-xl transition-all duration-200  " />
          </div>

          <div className='flex justify-center box4'>
            <label id='lb4' className='bg-zinc-500 rounded-l-xl ' htmlFor="ipt4">TEXTO</label>
            <input placeholder='Texto' id='ipt4' type="text" className="border-none outline-none p-3 text-center transition-all duration-200  " />
          </div>

          <div className='flex justify-center box5 relative'>
            <input onInput={mudar} id='ipt5' type="text" className="bg-transparent border-b-2 outline-none p-3 transition-all duration-200 caret-zinc-300 text-white " />
            <label id='lb5' className='absolute translate-y-[-50%] top-[50%] left-0 translate-x-[100%] px-1 text-white transition-all duration-200 ' htmlFor="ipt4">TEXTO</label>
          </div>


          <div className='flex justify-center'>
            <form className='bg-zinc-50 relative px-3 rounded-xl'>
              <input placeholder='Texto' type="text" className="bg-transparent py-5 border-none outline-none text-center transition-all duration-200  " />
              <button type="reset" className='p-2 rounded-md bg-zinc-300 '>X</button>
            </form>
          </div>

          <div className='flex justify-center'>
            <form className='bg-zinc-50 relative px-3 rounded-full'>
              <input placeholder='Texto' type="text" className="bg-transparent py-5 border-none outline-none transition-all duration-200  " />
              <button type="reset" className='py-2 px-3 rounded-full bg-zinc-300 '>X</button>
            </form>
          </div>

          <input id='ipt8' placeholder='Num. Cartão' type="text" className="border-none outline-none p-3 rounded-xl transition-all duration-200 text-center " />

          <input id='ipt9' placeholder='CEP' type="text" className="border-none outline-none p-3 rounded-xl transition-all duration-200 text-center " />

          <input id='ipt10' placeholder='Data de nascimento' type="text" className="border-none outline-none p-3 rounded-xl transition-all duration-200 text-center " />

          <input id='ipt11' placeholder='CPF' type="text" className="border-none outline-none p-3 rounded-xl transition-all duration-200 text-center " />
        </div>
      </details>

      <details className=' transition-all duration-200 '>
        <summary className='text-center bg-indigo-500 transition-all duration-200 p-5 rounded-xl text-white'>TextArea</summary>
        <div className='p-5 shadow-[0_0_2px_.1px] shadow-zinc-500 rounded-xl flex flex-col md:grid md:grid-cols-3 gap-10'>
          <div className='rounded-xl overflow-hidden'>
            <textarea className='resize-none border-none outline-none rounded-xl p-3 w-full h-full' ></textarea>
          </div>

          <textarea className='resize-none border-none outline-none rounded-xl p-3 w-full hover:shadow-[inset_0_0_0_4px,0_0_0_2px_#6366f1] focus:shadow-[inset_0_0_0_4px,0_0_0_2px_#6366f1] transition-all duration-200' ></textarea>

          <textarea className='resize-none border-none outline-none rounded-xl p-3 w-full hover:shadow-[inset_0_0_10px_4px] focus:shadow-[inset_0_0_10px_1px] transition-all duration-200' ></textarea>

        </div>

      </details>

      <details className=' transition-all duration-200 '>
        <summary className='text-center bg-indigo-500 transition-all duration-200 p-5 rounded-xl text-white'>Numeros</summary>
        <div className='p-5 shadow-[0_0_2px_.1px] shadow-zinc-500 rounded-xl flex flex-col md:grid md:grid-cols-3 gap-10'>

          <input type="number" className='h-[50px] p-3 text-center rounded-xl transition-all duration-300' max={5} min={0} placeholder='0 - 5' />
          <div className='h-[50px] flex justify-evenly'>
            <button onClick={() => {
              if (document.getElementById("iptBtts").value == "") {
                document.getElementById("iptBtts").value = 0
              } else if (document.getElementById("iptBtts").value == "0") {
                document.getElementById("iptBtts").value = 0
              } else {
                let value = document.getElementById("iptBtts").value
                value = parseInt(value)
                document.getElementById("iptBtts").value = value - 1
              }
            }} className='bg-indigo-500 rounded-xl py-3 px-4 hover:scale-110 active:scale-0 transition-all duration-300   '>-</button>
            <input id='iptBtts' type="number" className='p-3 text-center rounded-xl transition-all duration-300 semSetas' min={0} />
            <button onClick={() => {
              if (document.getElementById("iptBtts").value == "") {
                document.getElementById("iptBtts").value = 0
              } else {
                let value = document.getElementById("iptBtts").value
                value = parseInt(value)
                document.getElementById("iptBtts").value = value + 1
              }
            }} className='bg-indigo-500 rounded-xl py-3 px-4 hover:scale-110 active:scale-0 transition-all duration-300   '>+</button>
          </div>
          <div className='flex flex-col gap-2 '>
            <input id='iptConcat' type="number" className='p-3 text-center rounded-xl transition-all duration-300' />
            <div className='flex justify-evenly'>
              <button onClick={() => concatNum(1)} className='w-[25px] h=[25px] bg-indigo-500 rounded-md hover:rounded-3xl transition-all duration-300 active:scale-150'>1</button>
              <button onClick={() => concatNum(2)} className='w-[25px] h=[25px] bg-indigo-500 rounded-md hover:rounded-3xl transition-all duration-300 active:scale-150'>2</button>
              <button onClick={() => concatNum(3)} className='w-[25px] h=[25px] bg-indigo-500 rounded-md hover:rounded-3xl transition-all duration-300 active:scale-150'>3</button>
              <button onClick={() => concatNum(4)} className='w-[25px] h=[25px] bg-indigo-500 rounded-md hover:rounded-3xl transition-all duration-300 active:scale-150'>4</button>
              <button onClick={() => concatNum(5)} className='w-[25px] h=[25px] bg-indigo-500 rounded-md hover:rounded-3xl transition-all duration-300 active:scale-150'>5</button>
            </div>
          </div>

        </div>

      </details>

    </div >
  )
}