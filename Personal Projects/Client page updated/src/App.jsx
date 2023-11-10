import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Matches from './Pages/Matches';
import MainSection from './Pages/MainSection';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" exact element={<MainSection/>} />
        <Route path="/matches" element={<Matches/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
