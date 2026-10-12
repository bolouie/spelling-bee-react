import { Header } from './components/Header'
import { Hive } from './components/Hive'
import './App.css'

function App() {

  return (
    <>
      <Header date="2026-10-12" />
      <Hive centerLetter="A" outerLetters={["B", "C", "D", "E", "F", "G"]} />
    </>
  )
}

export default App
