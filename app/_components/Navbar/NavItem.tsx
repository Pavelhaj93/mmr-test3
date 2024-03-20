"use client"

import { GovNavItem } from "@gov-design-system-ce/react"
import { usePathname } from "next/navigation"
import { FC, useEffect, useState } from "react"

interface NavItemProps {
  name: string
  href: string
}

const NavItem: FC<NavItemProps> = ({ name, href }) => {
  const [active, setActive] = useState<boolean>(false)
  const pathname = usePathname()

  useEffect(() => {
    setActive(pathname === href)
  }, [pathname])

  //TODO: Add active state to the component

  return <GovNavItem href={href}>{name}</GovNavItem>
}

export default NavItem
