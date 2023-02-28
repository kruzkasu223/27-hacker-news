type PaginationProps = {
  page: number
  onPrev: () => void
  onNext: () => void
}

export const Pagination = ({ page, onPrev, onNext }: PaginationProps) => {
  return (
    <div className="btn-group m-auto">
      <button className="btn" onClick={onPrev} disabled={page === 1}>
        «
      </button>
      <button className="btn btn-active">Page {page}</button>
      <button className="btn" onClick={onNext}>
        »
      </button>
    </div>
  )
}
