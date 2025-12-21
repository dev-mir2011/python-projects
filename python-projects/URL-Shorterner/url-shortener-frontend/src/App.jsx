import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/views/Home';
import CreateUrl from './components/views/Create-Url';
import ViewUrl from './components/views/View-Url';
import { FLASK_URL } from './routes';

function App() {

  const [shortURL, setShortURL] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-url" element={<CreateUrl urlPrefix={FLASK_URL} setShortURL={setShortURL} />} />
        <Route path="/short_url" element={<ViewUrl shortURL={shortURL} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App