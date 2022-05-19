import './App.css';

function Header() {
  return (
    <div>
      <header className="Header">
        <p>
          S21 Gait Recognition
        </p>
      </header>
    </div>
  );
}

function Body() {
  return (
    <div className='Body'> 
      <p>
        Test
      </p>
    </div>
  )
}

function Footer() {
  return (
    <div className="Footer">
      <a
        className="Link-light"
        href="https://github.com/dksath/gait_recognition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gait Recognition Repository
      </a>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
