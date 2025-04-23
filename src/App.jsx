import PasswordValidator from "./components/PasswordValidator";
import LoginLanding from "./pages/LoginLanding";
import RegisterLanding from "./pages/RegisterLanding";
import { Routes, Route, BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<LoginLanding />} />
          <Route path="/register" element={<RegisterLanding />} />
          <Route path="/tester" element={<PasswordValidator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
