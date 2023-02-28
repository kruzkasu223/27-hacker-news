import { useQuery } from "@tanstack/react-query"
import { typedFetch } from "./typedFetch"

export const useTypedQuery = <TResponse,>(key: string, page = 1) => {
  const queryKey = [key, page] as const
  return useQuery({
    queryKey,
    queryFn: ({ signal }) =>
      typedFetch<TResponse>(queryKey[0], queryKey[1], signal),
  })
}
