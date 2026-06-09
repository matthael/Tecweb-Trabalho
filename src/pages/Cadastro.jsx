import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Cadastro() {
  // Puxa a função de adicionar do contexto global
  const { adicionarUsuario } = useContext(UserContext);

  // Estado único para o formulário (boa prática para formulários maiores)
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
  });

  // Estados para mensagens de feedback
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  // Captura a digitação do usuário de forma dinâmica
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Processa o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setErro("");
    setSucesso(false);

    // --- VALIDAÇÕES ---
    // 1. Campos vazios
    if (!formData.nome.trim() || !formData.email.trim() || !formData.telefone.trim() || !formData.cidade.trim()) {
      setErro("Todos os campos são obrigatórios!");
      return;
    }

    // 2. Validação simples de e-mail (conter @)
    if (!formData.email.includes("@")) {
      setErro("Por favor, insira um e-mail válido (deve conter '@').");
      return;
    }

    // Se passou nas validações: salva no contexto global
    adicionarUsuario(formData);
    setSucesso(true);

    // Limpa o formulário após o cadastro bem-sucedido
    setFormData({ nome: "", email: "", telefone: "", cidade: "" });
  };

  return (
    <main className="container">
      <h1>Cadastro de Usuário</h1>
      <p>Preencha os dados abaixo para realizar o cadastro.</p>

      {/* Exibição de mensagens de erro ou sucesso */}
      {erro && <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{erro}</p>}
      {sucesso && <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>Usuário cadastrado com sucesso!</p>}

      <form onSubmit={handleSubmit} style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>E-mail:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <div>
          <label style={{ display: "block", marginBottom: "5px" }}>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#222", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
          Cadastrar
        </button>
      </form>
    </main>
  );
}

export default Cadastro;