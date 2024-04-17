export default function CardF() {
  return (
    <div className="bg-indigo-800 w-[320px] md:w-[450px] h-[200px] md:h-[250px] rounded-xl relative overflow-hidden">
      <div className="w-[50px] h-[50px] rounded-xl bg-indigo-950 mt-3 ml-3   "></div>

      <div className="w-full px-5 flex items-center justify-between absolute translate-y-[-30%] bottom-0  ">
        <div className="w-[65%] h-[25px] rounded-full bg-indigo-950     "></div>
        <div className="w-[25%] h-[50px] rounded-xl bg-indigo-950    "></div>
      </div>

      <h2 className="w-full absolute translate-y-[-50%] top-[45%] md:top-[50%] text-center text-3xl text-opacity-50 text-indigo-300  ">Parte da frente</h2>
    </div>
  )
}