// src/services/api.js

// URL do json-server que criamos (mude se o seu grupo usar outra porta)
const BASE_URL = "http://localhost:3000"; 

/**
 * BUSCAR USUÁRIOS (GET)
 * Puxa a lista de usuários salvos no db.json
 */
export const getUsuarios = async () => {
  try {
    const response = await fetch(`${BASE_URL}/usuarios`);
    if (!response.ok) {
      throw new Error("Erro ao buscar usuários do servidor.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na API (GET):", error);
    return []; // Retorna uma lista vazia caso o servidor esteja desligado
  }
};

/**
 * SALVAR USUÁRIO (POST)
 * Envia os dados do formulário para serem gravados permanentemente no db.json
 */
export const salvarUsuario = async (novoUsuario) => {
  try {
    const response = await fetch(`${BASE_URL}/usuarios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novoUsuario),
    });

    if (!response.ok) {
      throw new Error("Erro ao salvar o usuário no servidor.");
    }

    const data = await response.json();
    return data; // Retorna o usuário com o ID gerado pelo json-server
  } catch (error) {
    console.error("Erro na API (POST):", error);
    return null;
  }
};