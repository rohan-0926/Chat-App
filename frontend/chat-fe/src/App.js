import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainForm from './component/MainForm';
import ChatRoom from './component/ChatRoom';

function App() {
  return (
    <div className="container-fluid bg-dark text-light d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
      <Router>
          <Routes>
              <Route index element={<MainForm/>}>
                 
              </Route>
              <Route path="/chat/:roomName" element={<ChatRoom/>}>
                 
              </Route>
              <Route path='*' element={<h1>404 not found</h1>}>
                 
              </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
