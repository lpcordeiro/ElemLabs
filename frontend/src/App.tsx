import React from 'react';
import './App.css';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      {/* O conteúdo principal da sua página viria aqui */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <p>
          Conteúdo principal da página.
        </p>
        <p>
          Edite <code>src/App.tsx</code> e salve para recarregar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
