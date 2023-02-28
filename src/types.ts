export type TNews = {
  id: number
  title: string
  points: number | null
  user: null | string
  time: number
  time_ago: string
  comments_count: number
  type: string
  url: string
  domain?: string
}
