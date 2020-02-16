import React from 'react';
import './css/reset.css';
import './css/style.css';
import Routes from './routes';
function App() {
    return (
        <>
        <header>
            <h1>Simpósio E.B.D </h1><br />
            <h6>Não perca essa oportunidade muito especial</h6>
        </header>
        <div className="App">
        <Routes />
            

        </div>

        <div className="clear"></div>

        <footer>
            <p>&copy; 2020 Todos os direitos reservados </p>
            <span>Create By <a href="https://github.com/ajjunior33" target="_blank" rel="noopener noreferrer">André Junior</a></span>
        </footer>

        </>
  );
}

export default App;
