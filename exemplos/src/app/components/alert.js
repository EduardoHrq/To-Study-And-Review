export default function AlertPop({ click }) {
  return (
    <div className="w-[320px] h-[200px] p-3 bg-black rounded-2xl text-white relative flex flex-col justify-between  ">
      <button onClick={click} className="absolute w-[25px] h-[25px] bg-red-500 flex items-center justify-center rounded-full right-0 translate-x-[-25%] translate-y-[-25%]">X</button>
      <h1 className="text-center">ALERT</h1>
      <div className="w-full h-[2px] rounded-full bg-zinc-500"></div>
      <p className="text-justify">TEXTO-TEXTO-TEXTO-TEXTO-TEXTO-TEXTO-TEXTO-TEXTO-TEXTO-TEXTO-TEXTO-TEXTO</p>
      <div className="flex flex-wrap justify-between">
        <button className="w-[40%] p-2 bg-indigo-500 rounded-md hover:shadow-[inset_0_0_0_4px_#000,0_0_0_2px_#6366f1] transition-all duration-300  ">BT1</button>
        <button className="w-[40%] p-2 bg-indigo-500 rounded-md hover:shadow-[inset_0_0_0_4px_#000,0_0_0_2px_#6366f1] transition-all duration-300  ">BT2</button>
      </div>
    </div>
  )
}