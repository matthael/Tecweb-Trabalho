// src/services/api.js
const BASE_URL = "http://localhost:3001"; 

// Função para buscar os usuários salvos no db.json
export const getUsuarios = async () => {
  try {
    const response = await fetch(`${BASE_URL}/usuarios`);
    if (!response.ok) {
      throw new Error("Erro ao buscar usuários do servidor.");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro na API (GET):", error);
    return [];
  }
};

// Função para enviar e salvar um novo usuário no db.json
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
    return await response.json();
  } catch (error) {
    console.error("Erro na API (POST):", error);
    return null;
  }
};