import { TNews } from "@/types"

type CardProps = {
  data: TNews
  index: number
}

const formatTime = (time: number) => {
  try {
    const date = new Date(time * 1000)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format(date)
  } catch {
    const date = new Date(time * 1000)
    return date.toLocaleString()
  }
}

export const Card = ({ data, index }: CardProps) => {
  return (
    <>
      {index === 0 && <div className="divider"></div>}
      <div className="flex gap-4 items-center">
        <div className="min-w-[70px] text-center font-semibold">
          {data.points !== null ? <span>{data.points || 0}</span> : ""}
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <a className="hover:link" href={data.url} target="_blank">
              {data.title}
            </a>{" "}
            {data?.domain && (
              <>
                (
                <a className="link" href={"//" + data.domain} target="_blank">
                  {data.domain}
                </a>
                )
              </>
            )}
          </div>

          <div>
            <span className="text-stone-500">
              {!!data.user && (
                <span>
                  by <span className="font-semibold">{data.user} </span>
                </span>
              )}

              {!!data.time_ago && !!data.user && <> &#183; </>}
              {!!data.time_ago && (
                <div
                  className="tooltip"
                  data-tip={!!data.time && formatTime(data.time)}
                >
                  <span>{data.time_ago}</span>
                </div>
              )}

              {!!data.time_ago && !!data.comments_count && <> &#183; </>}
              {!!data.comments_count && (
                <span>{data.comments_count || 0} comments</span>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  )
}
