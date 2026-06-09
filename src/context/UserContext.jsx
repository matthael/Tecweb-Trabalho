import { createContext, useState } from "react";

// 1. Criar o Contexto
export const UserContext = createContext();

// 2. Criar o Provedor (Provider)
export function UserProvider({ children }) {
  // Estado que vai guardar a lista de usuários locais cadastrados pelo formulário
  const [usuariosLocais, setUsuariosLocais] = useState([]);

  // Função para adicionar um novo usuário na lista
  const adicionarUsuario = (novoUsuario) => {
    // Gera um ID simples baseado no timestamp atual
    const usuarioComId = { ...novoUsuario, id: Date.now() };
    setUsuariosLocais((usuariosAnteriores) => [...usuariosAnteriores, usuarioComId]);
  };

  return (
    <UserContext.Provider value={{ usuariosLocais, adicionarUsuario }}>
      {children}
    </UserContext.Provider>
  );
}
