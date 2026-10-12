import { Header } from './components/Header'
import { LetterButton } from './components/LetterButton'

import './App.css'

function App() {

  return (
    <>
      <Header date="2026-10-12" />
      <LetterButton letter="A" isCenter />
      <LetterButton letter="B" isCenter={false} />
      <LetterButton letter="C" isCenter={false} />
      <LetterButton letter="D" isCenter={false} />
      <LetterButton letter="E" isCenter={false} />
      <LetterButton letter="F" isCenter={false} />
      <LetterButton letter="G" isCenter={false} />
    </>
  )
}

export default App
