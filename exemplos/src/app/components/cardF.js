export default function CardB() {
  return (
    <div className="bg-indigo-800 w-[320px] md:w-[450px] h-[200px] md:h-[250px] rounded-xl relative overflow-hidden">
      <div className="w-full h-[25%] bg-indigo-950 "></div>

      <div className="w-[65%] md:w-[75%] h-[25px] bg-indigo-950 rounded-full absolute translate-y-[-50%] bottom-[25%] left-[4%] "></div>

      <div className="w-full absolute translate-y-[-30%] bottom-[0] flex items-center justify-between gap-4 px-5 ">
        <div className="flex flex-1 items-center justify-start gap-5">
          <div className="w-[45%] h-[25px] bg-indigo-950 rounded-full "></div>
          <div className="w-[45%] h-[25px] bg-indigo-950 rounded-full "></div>
        </div>
        <div className="w-[50px] h-[50px] bg-indigo-950 rounded-full   "></div>
      </div>

      <h2 className="w-full absolute translate-y-[-50%] top-[40%] md:top-[50%] text-center text-3xl text-opacity-50 text-indigo-300  ">Parte de tras</h2>
    </div>
  )
}