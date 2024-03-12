import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login"; 

import Home from "./components/home";
import { Navigate } from "react-router-dom";
import GlobalState from "./components/globalState";
import { useContext } from "react";
import TaskContext from "./components/taskContext";

function App() {
  const isLogged = useContext(TaskContext).isLogged;
  
  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home/>} />
            {isLogged ? <Route path="*" element={<Navigate to="/home" replace />} /> : <Route path="*" element={<Navigate to="/login" replace />} />}
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
