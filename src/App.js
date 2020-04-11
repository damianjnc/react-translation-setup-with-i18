import React from 'react';
import { useTranslation } from 'react-i18next'
import logo from './logo.svg';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const handleClick = language => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <nav style={{ width: '100%', padding: '2rem 0', backgroundColor:'gray' }}>
        <button onClick={()=>handleClick('en')} >
          English
        </button>
        <button onClick={()=>handleClick('ko')} >
          Korean
        </button>
        <button onClick={()=>handleClick('chi')} >
          Chinese
       </button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <div>{'Hey'}</div>
      <div>{t('Thanks.1')}</div>
      <div>{t('Why.1')}</div>
      </header>
    </div>
  );
}

export default App;
