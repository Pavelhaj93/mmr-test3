"use client"

//TODO: switch for dynamic data
const NavItems = [
  { name: "Úvod", href: "/" },
  { name: "Novinky", href: "/novinky" },
  { name: "Legislativa", href: "/legislativa" },
  { name: "Normy", href: "/normy" },
  { name: "Organizace", href: "/organizace" },
  { name: "Záměry", href: "/zamery" },
  { name: "Úřední desky", href: "/uredni-desky" },
  { name: "Akce", href: "/akce" },
  { name: "Kontakty", href: "/kontakt" },
]

import Separator from "@/components/Separator/Separator"
import { GovButton, GovContainer, GovNav } from "@gov-design-system-ce/react"
import NavItem from "./NavItem"

const Navbar = () => {
  return (
    <GovContainer className="bg-red-500">
      <div className="flex w-screen justify-between bg-red-500">
        <div className="w-1/2 bg-red-500">Logo</div>
        <div className="w-1/2">rightSide</div>
      </div>
      <GovButton />
      <Separator />
      <GovNav>
        {NavItems.map(item => (
          <NavItem key={item.name} name={item.name} href={item.href} />
        ))}
      </GovNav>
    </GovContainer>
  )
}

export default Navbar
