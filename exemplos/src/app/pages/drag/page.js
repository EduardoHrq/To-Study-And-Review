'use client';

import './style.css';

export default function Arrastar() {

  function drag(ev) {
    console.log("foi")
    console.log(ev.target.id)
    ev.dataTransfer.setData("text", ev.target.id);

    document.getElementById("area1").style.zIndex = 3;
    document.getElementById("area2").style.zIndex = 3;
  }

  function dragOver(ev) {
    ev.preventDefault();
  }

  function dragE(ev) {
    document.getElementById(ev.target.id).style.boxShadow = "0 0 0 4px #6366f1 inset";
  }

  function dragS(ev) {
    document.getElementById(ev.target.id).style.boxShadow = "0 0 0 0 #6366f1 inset";
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    let lugar = ev.target;

    if (lugar.id.includes("obj")) {
      console.log("erro")
    } else {
      lugar.appendChild(document.getElementById(data));
    }
    document.getElementById(ev.target.id).style.boxShadow = "0 0 0 0 #000 inset";
    ev
      .dataTransfer
      .clearData();
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-5">

      <div className="shadow-[inset_0_0_0_4px_#6366f1] overflow-hidden rounded-xl">
        <div className="text-center bg-indigo-500 py-5">
          AREA1
        </div>
        <div className="p-3 flex items-center justify-center">
          <div id='area1' onDragEnter={dragE} onDragLeave={dragS} onDragOver={dragOver} onDrop={drop} className="w-[300px]  min-h-[300px] p-3 bg-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2 relative transition-all duration-300 ">
            <div onDragStart={drag} id='obj1' className="w-[100px] h-[100px] bg-indigo-500 flex items-center justify-center text-center obj transition-all duration-300 " draggable="true" >
              1
            </div>
            <div onDragStart={drag} id='obj2' className="w-[100px] h-[100px] bg-indigo-500 flex items-center justify-center text-center obj transition-all duration-300 " draggable="true" >
              2
            </div>
            <div onDragStart={drag} id='obj3' className="w-[100px] h-[100px] bg-indigo-500 flex items-center justify-center text-center obj transition-all duration-300 " draggable="true" >
              3
            </div>
          </div>
        </div>
      </div>

      <div className="shadow-[inset_0_0_0_4px_#6366f1] overflow-hidden rounded-xl">
        <div className="text-center bg-indigo-500 py-5">
          AREA2

        </div>
        <div className="p-3 flex items-center justify-center">
          <div id='area2' onDragEnter={dragE} onDragLeave={dragS} onDragOver={dragOver} onDrop={drop} className="w-[300px] min-h-[300px] p-3 bg-zinc-800 rounded-xl flex flex-col items-center justify-start gap-2 relative transition-all duration-300 ">

          </div>
        </div>
      </div>



    </div>
  )
}