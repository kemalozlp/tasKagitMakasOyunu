import './App.css'

function App() {
  
  return (
    <>
      <div className="container">
        <ScoreBoard />
        < Hero />
        < GameShow />
        < Rules />
        < RulesShow />

      </div>
    </>
  )
}

function ScoreBoard () {
  return (
    <div className="score-board">
    <div className="header">
      <img src="/image/ROCKPAPERSCISSORS..png" alt="" />
    </div>
    <div className="score">
      <p>Skor</p>
      <h2 className="scorepoint">0</h2>
    </div>
  </div>

  )
}

function Hero () {
  return (
    <div className="hero">
    <button className="paper">
      <img src="/image/paper.png" alt="paper image" />
    </button>
    <button className="scissors">
      <img src="/image/scissors.png" alt="scissors image" />
    </button>
    <button className="rock">
      <img src="/image/rock.png" alt="rock image" />
    </button>
  </div>
  )
}

function GameShow () {
  return (
    <div className="game-show">
    <div className="show"></div>
    <div className="sonuc">
      <p className="sonucyazi"></p>
      <button className="tryagain">Yeniden Oyna</button>
    </div>
    <div className="computer-show"></div>
  </div>
  )
}


function Rules () {
  let modal = document.querySelector (".modal") 
  function Ruless () {
    modal.showModal ()
  }
  return (
    <div className="rules" onClick={Ruless}>
      <p>Kurallar</p>
  </div>
  )
}

function RulesShow () {
  return ( <dialog className='modal'> 
    <div className="rules-show">
    <div className="rules-header">
      <p>RULES</p>
        <img src="/image/X.png " className="desktop X" alt="" />
    </div>
    <div className="rules-hero">
      <img src="/image/kagıt.png" className="kagıt" alt="" />
      <div className="left-beats">
        <p className="beats">Yener</p>
        <img src="/image/sol.png" alt="" />
      </div>
      <img src="/image/makas.png" className="makas" alt="" />
      <div className="down-right-beats">
        <p className="beats">Yener</p>
        <img src="/image/sag-alt.png" alt="" />
      </div>
      <img src="/image/tas.png" className="tas" alt="" />
      <div className="up-right-beats">
        <img src="/image/sag-ust.png" alt="" />
        <p className="beats">Yener</p>
      </div>
    </div>
    <img src="/image/X.png" className="mobile mbX" alt="" />
  </div>
  </dialog>
  )
}







export default App
