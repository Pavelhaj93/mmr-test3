"use client"

import { GovContainer } from "@gov-design-system-ce/react"

export default function NewsDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <GovContainer>
        <div>Detail novinky: {params.slug}</div>
      </GovContainer>
    </div>
  )
}
