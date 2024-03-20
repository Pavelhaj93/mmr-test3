"use client"

import { GovBreadcrumbs, GovIcon } from "@gov-design-system-ce/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const BreadCrumbs = () => {
  const pathname = usePathname()
  console.log(pathname)
  const pathArray = pathname === "/" ? [""] : pathname.split("/")
  console.log(pathArray)

  return (
    <GovBreadcrumbs>
      <ul>
        {pathArray.map((path, index) => {
          return (
            <li key={index}>
              <GovIcon name="chevron-right" />
              <Link href={`/${path}`}>
                {path === ""
                  ? "Úvod"
                  : path.charAt(0).toUpperCase() + path.slice(1)}
              </Link>
            </li>
          )
        })}
      </ul>
    </GovBreadcrumbs>
  )
}

export default BreadCrumbs
