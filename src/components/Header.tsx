import Link from "next/link"
import { useRouter } from "next/router"

export const Header = () => {
  const router = useRouter()
  const { pathname } = router
  const isActiveClassname = (path: string) =>
    pathname === path ? "active" : ""

  return (
    <div className="navbar bg-base-100 p-4">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          27/27 - Hacker News
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href={"/"} className={isActiveClassname("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href={"/new"} className={isActiveClassname("/new")}>
              New
            </Link>
          </li>
          <li>
            <Link href={"/ask"} className={isActiveClassname("/ask")}>
              Ask
            </Link>
          </li>
          <li>
            <Link href={"/show"} className={isActiveClassname("/show")}>
              Show
            </Link>
          </li>
          <li>
            <Link href={"/jobs"} className={isActiveClassname("/jobs")}>
              Jobs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
