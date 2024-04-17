import './style.css'
import Image from 'next/image'

export default function Buttons() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={4}>
              Buttons
            </th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <button id='check1' className='btn check bg-emerald-500'>
                <Image src={"/checkmark.png"} width={40} height={40}></Image>
              </button>
            </td>

            <td>
              <button id='check2' className='btn check'>
                <Image src={"/checkmark.png"} width={40} height={40}></Image>
              </button>
            </td>

            <td>
              <button id='check3' className='btn check'>
                <Image src={"/checkmark.png"} width={50} height={50}></Image>
              </button>
            </td>

            <td>
              <button id='check4' className='btn check'>
                <Image src={"/checkmark.png"} width={50} height={50}></Image>
              </button>
            </td>
          </tr>
          <tr>

            <td>
              <button id='close1' className='btn close'>
                <Image src={"/x.png"} width={40} height={40}></Image>
              </button>
            </td>

            <td>
              <button id='close2' className='btn close'>
                <Image src={"/x.png"} width={50} height={50}></Image>
              </button>
            </td>

            <td>
              <button id='text1' className='btn texto'>TEXTO</button>
            </td>

            <td>
              <button id='text2' className='btn texto'>TEXTO</button>
            </td>
          </tr>

          <tr>

            <td>
              <button id='text3' className='btn texto'>TEXTO</button>
            </td>

            <td>
              <button id='text4' className='btn texto'>TEXTO</button>
            </td>

            <td>
              <button id='text5' className='btn texto rounded-xl'>TEXTO</button>
            </td>

            <td>
              <button id='text8' className='btn texto rounded-xl'>TEXTO</button>
            </td>

          </tr>

          <tr>


            <td>
              <button id='text9' className='btn texto rounded-xl'>TEXTO</button>
            </td>

            <td>
              <button id='text10' className='btn texto rounded-xl'>TEXTO</button>
            </td>

            <td>
              <button id='text11' className='btn texto rounded-xl'>TEXTO</button>
            </td>

            <td>
              <button id='text6' className='btn texto rounded-xl'>TEXTO</button>
            </td>

          </tr>

          <tr>



            <td>
              <button id='text7' className='btn texto rounded-xl'>TEXTO</button>
            </td>


            <td>
              <button id='text12' className='btn texto rounded-xl'>TEXTO</button>
            </td>

            <td>
              <button id='text13' className='btn texto rounded-xl'>TEXTO</button>
            </td>

            <td>
              <button id='text14' className='btn texto rounded-xl'>TEXTO</button>
            </td>

          </tr>

          <tr>


            <td>
              <button id='text15' className='btn texto rounded-xl'>TEXTO</button>
            </td>

            <td>
              <button className='outline-none p-2 texto border-b-2 border-lime-500 hover:text-lime-500 hover:rounded-xl transition-all duration-200'>TEXTO</button>
            </td>

            <td>
              <button className='outline-none p-2 texto border-b-2 border-zinc-500 hover:shadow-[0_0_0_4px] hover:border-none hover:text-zinc-500 hover:rounded-xl transition-all duration-200'>TEXTO</button>
            </td>

            <td>
              <button className='btn p-2 texto bg-neutral-500 text-black rounded-xl hover:bg-opacity-70 hover:text-white'>TEXTO</button>
            </td>

          </tr>
        </tbody>

      </table>
    </div >
  )
}