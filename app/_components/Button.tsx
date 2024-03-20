"use client"

import { GovButton } from "@gov-design-system-ce/react"
import { FC, PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren<{}> {}

const Button: FC<ButtonProps> = ({ children }) => {
  return <GovButton>{children}</GovButton>
}

export default Button
