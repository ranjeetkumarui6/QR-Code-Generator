
import { useRef } from 'react';
import './App.css'
import { useState } from 'react';

function App() {

  const  [name,setname]=useState("")
  const [qrname,setqrname]=useState("")
  const refid=useRef()
  const handleclick=()=>{
    setqrname(name)
    
  }
  return (
    <>
    <div className="qrcontainer">
      <p className='paragraph'>QR-Code Generator</p>
      <div className={qrname ? 'showbox': "inputbox"}>
      <input type="text" onChange={(e)=>setname(e.target.value)} className='input' placeholder='Enter Any Name Or URL'/>
      <img ref={refid} src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrname}`} alt="qr-code" className='qrcode' />
      </div>
      <button className='btn' onClick={handleclick}>Generate QR-Code</button>
    </div>
    </>
  )
}

export default App
