import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { salvarUsuario } from "../services/api";

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
  const handleSubmit = async (e) => {
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

// --- SALVANDO NA API (db.json) E NO CONTEXTO ---
    try {
      // 3. PASSO: Envia os dados para o json-server gravar no db.json
      const respostaApi = await salvarUsuario(formData);

      if (respostaApi) {
        // Se a API salvou com sucesso, adicionamos o retorno (já com o ID gerado) no Contexto Global
        adicionarUsuario(respostaApi);
        setSucesso(true);

        // Limpa o formulário após o cadastro bem-sucedido
        setFormData({ nome: "", email: "", telefone: "", cidade: "" });
      } else {
        setErro("Não foi possível salvar no servidor. O json-server está ligado?");
      }
    } catch (err) {
      setErro("Erro de conexão com o banco de dados.");
      console.error(err);
    }
  };

return (
    <main className="container">
      <div className="form-card">
        <h1>Cadastro de Usuário</h1>
        <p>Preencha os dados abaixo para realizar o cadastro.</p>

        {erro && <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>{erro}</p>}
        {sucesso && <p style={{ color: "green", fontWeight: "bold", marginTop: "10px" }}>Usuário cadastrado com sucesso!</p>}

        <form onSubmit={handleSubmit} style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>E-mail:</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Telefone:</label>
            <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Cidade:</label>
            <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
          </div>

          <button type="submit" className="btn-submit">
            Cadastrar Usuário
          </button>
        </form>
      </div>
    </main>
  );
}

export default Cadastro;