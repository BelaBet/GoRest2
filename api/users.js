const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

export default async function handler(req, res) {
  try {
    const response = await fetch("https://gorest.co.in/public/v2/users", {
      headers: { Accept: "application/json" }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar os usuários", detalhes: error.toString() });
  }
}
