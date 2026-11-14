import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Footer.jsx'

function App() {
  return (
    <>
      <header>
        <h1>Mathificent</h1>
        <img src={reactLogo} className="framework" alt="Mathificent logo" />
      </header>
      <Footer />
    </>
  )
}

export default App
