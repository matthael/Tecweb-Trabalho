const BASE_URL = "https://jsonplaceholder.typicode.com"; // Troque pela API real de vocês

export const getEvents = async () => {
  try {
   
    const response = await fetch(`${BASE_URL}/posts?_limit=6`); 
    if (!response.ok) {
      throw new Error("Erro ao buscar os dados da API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na API:", error);
    return [];
  }
};