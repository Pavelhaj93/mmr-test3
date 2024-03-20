"use client"

import { GovContainer } from "@gov-design-system-ce/react"
import Link from "next/link"

export default function News() {
  return (
    <GovContainer>
      <ul>
        {Array.from({ length: 10 }).map((_, i) => (
          <li key={i}>
            <Link href={`/novinky/${i}`}>Novinka {i}</Link>
          </li>
        ))}
      </ul>
    </GovContainer>
  )
}
