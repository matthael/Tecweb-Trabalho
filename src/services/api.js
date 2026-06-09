const BASE_URL = "http://localhost:3001";

export const getProdutos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/produtos`);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};

export const createProduto = async (produto) => {
  try {
    const response = await fetch(`${BASE_URL}/produtos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });

    return await response.json();
  } catch (error) {
    console.error("Erro ao cadastrar produto:", error);
    return null;
  }
};