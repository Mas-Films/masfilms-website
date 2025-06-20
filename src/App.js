import React from 'react';
import './App.css'; // Import the CSS for styling

// Import images from the public folder.
const backgroundImage = process.env.PUBLIC_URL + '/background.png';
const logoImage = process.env.PUBLIC_URL + '/logo.png'; // Updated logo file name

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="App-overlay"> {/* This div will create the semi-transparent overlay */}
        <div className="App-content">
          <img src={logoImage} className="App-logo" alt="+Films CR Logo" />

          {/* New Header */}
          <h1 className="title-spacing">+Films Costa Rica</h1>
          <h2 className="detail-spacing">Productora audiovisual</h2>

          {/* Slogan with italics */}
          <h3 className="slogan-spacing"><i>Historias con +vida</i>.</h3>

          {/* Under Construction Text with emojis */}
          <p className="under-construction-spacing">🚧 Página en construcción 🚧</p>

          <p className="contact-info">Háblanos a la dirección: <a href="mailto:info@masfilmscr.com">info@masfilmscr.com</a></p>
        </div>

        {/* Optional: Add a simple footer */}
        <footer className="App-footer">
          <p>&copy; {new Date().getFullYear()} +Films Costa Rica. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
