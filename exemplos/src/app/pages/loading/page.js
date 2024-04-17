import './style.css'

export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-10">

      <div id='l1' className="objt"></div>
      <div id='l2' className="objt"></div>
      <div id='l3' className="objt"></div>
      <div id='l4' className="objt"></div>
      <div id='l5' className="objt"></div>
      <div id='l6' className="objt"></div>
      <div id='l7' className="objt"></div>


      <div id='l1-1' className="objt"></div>
      <div id='l2-1' className="objt"></div>
      <div id='l3-1' className="objt"></div>
      <div id='l4-1' className="objt"></div>
      <div id='l5-1' className="objt"></div>
      <div id='l6-1' className="objt"></div>
      <div id='l7-1' className="objt"></div>


      <div id='l1-2' className="objt"></div>
      <div id='l2-2' className="objt"></div>
      <div id='l3-2' className="objt"></div>
      <div id='l4-2' className="objt"></div>
      <div id='l5-2' className="objt"></div>
      <div id='l6-2' className="objt"></div>
      <div id='l7-2' className="objt"></div>


      <div id='b1' className="objt"></div>
      <div id='b2' className="objt"></div>


      <progress value={50} max={100}></progress>

    </div>
  )
}