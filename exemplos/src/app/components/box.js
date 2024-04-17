export default function Box() {
  return (
    <div className="w-[200px] h-[300px] rounded-xl p-3 bg-indigo-700 box transition-all duration-300">
      <div className="w-full h-[50%] bg-indigo-950 rounded-xl flex items-center justify-center">IMAGEM</div>
      <div className="pt-3 h-[50%] flex flex-col justify-between">
        <div className="bg-indigo-950 w-full h-[20px] flex items-center justify-center  "></div>
        <div className="bg-indigo-950 w-full h-[45px] flex items-center justify-center "></div>
        <div className="bg-indigo-950 w-full h-[40px] rounded-xl flex items-center justify-center ">botao</div>
      </div>
    </div>
  )
}