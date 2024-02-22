import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login"; 

import Home from "./components/home";
import { Navigate } from "react-router-dom";
import GlobalState from "./components/globalState";

function App() {
  
  return (
    <div>
      <GlobalState>
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home/>} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
}

export default App;
