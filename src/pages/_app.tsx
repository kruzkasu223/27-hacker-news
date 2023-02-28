import { Header } from "@/components"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"
import { useState } from "react"
import { Loading } from "@/components/Loading"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: { queries: { refetchOnWindowFocus: false } },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>27/27 - Hacker News</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header />
        <div className="divider mt-0 h-0"></div>
        <Loading />
        <main className="flex min-h-screen flex-col gap-4 p-8">
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  )
}
