import { Card, Error, Pagination } from "@/components"
import { useTypedQuery } from "@/hooks"
import { TNews } from "@/types"
import { useState } from "react"

export default function New() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useTypedQuery<TNews[]>("newest", page)

  const onPrev = () => setPage((page) => (page !== 1 ? page - 1 : page))
  const onNext = () => setPage((page) => page + 1)

  if (isError || (!isLoading && !data.length)) return <Error />

  return (
    !isLoading && (
      <>
        <Pagination page={page} onPrev={onPrev} onNext={onNext} />
        {data?.map((news, index) => (
          <Card key={news.id} index={index} data={news} />
        ))}
        <Pagination page={page} onPrev={onPrev} onNext={onNext} />
      </>
    )
  )
}
