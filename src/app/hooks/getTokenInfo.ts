
export function getUserEmailFromToken(): string | null {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.sub || null; // sub = subject = e-mail
  } catch (error) {
    console.error("Erro ao decodificar token:", error);
    return null;
  }
}

export function getUserIdFromToken(): number | null {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1])); // decodifica o payload
    return payload.id || payload.userId || null; // ajuste conforme o nome no seu token
  } catch (error) {
    console.error("Erro ao decodificar token:", error);
    return null;
  }
}
