const API_URL = import.meta.env.VITE_API_URL ?? "";
export async function apiClient<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!response.ok) throw new Error(`API 요청 실패 (${response.status})`);
  return response.json() as Promise<T>;
}
export const delay = (ms = 200) =>
  new Promise((resolve) => setTimeout(resolve, ms));
