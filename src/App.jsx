import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Listagem from "./pages/Listagem";
import { UserProvider } from "./context/UserContext"; // <-- Importe aqui
import "./styles.css";

function App() {
  return (
    <UserProvider> {/* <-- Envolva tudo aqui */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listagem" element={<Listagem />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;