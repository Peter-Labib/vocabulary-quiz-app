import { BrowserRouter } from 'react-router-dom';

import Header from './UI/Header/Header';
import Router from './router';
import { ScoreProvider } from './context/ScoreContext';

function App() {
  return (
    <div className='App'>
      <Header />
      <BrowserRouter>
        <ScoreProvider>
          <Router />
        </ScoreProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
