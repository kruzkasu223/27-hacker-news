import { API_URL } from "@/constants"

export const typedFetch = async <TResponse>(
  key: string,
  page = 1,
  signal?: AbortSignal
) => {
  const res = await fetch(`${API_URL}/${key}?page=${page}`, { signal })
  const data = (await res.json()) as TResponse
  return data
}
