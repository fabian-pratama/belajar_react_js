import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Greeting() {
  return (
    <>
      <div className="greeting">
      <h1>Halo NiiiiiiigasdsSS</h1>
      <p>RRRRAarrrraaaaattttttaaaAsAsA</p>
      </div>
    </>
  )
}

function Biodata(props) {
  return (
    <>
      <div className="biodata">
      <p><span>Nama</span> <strong>{props.nama}</strong></p>
      <p><span>Kelas</span> <strong>{props.kelas}</strong></p>
      <p><span>NISN</span> <strong>{props.nisn}</strong></p>
      </div>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
      <div className="glow"></div>

      <div className="card">
        <Greeting />
        <Biodata nama="Fabian" kelas="XI PPLG 1" nisn="177513" />
        <Biodata nama="Fabsskuyy" kelas="XI PPLG 1" nisn="177513" />
        <Biodata nama="Fabegro" kelas="XI PPLG 1" nisn="177513" />
      </div>
      </div>
    </>
  )
}

export default App
