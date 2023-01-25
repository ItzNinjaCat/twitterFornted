import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Posts from './components/Posts';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (

    <div>
    <BrowserRouter>
        <div className="wrapper">
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          <div className="main">
            <Routes>
              <Route path="/" element={<Posts loggedIn={loggedIn} />}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
