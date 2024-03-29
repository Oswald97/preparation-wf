import { Button } from "@/src/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu"

import { CircleEllipsis, Ellipsis } from "lucide-react"
import { useEffect } from "react"
import { Link } from "react-router-dom"


export function DataTableRowActions({
  row,
}: {row: Oeuvre}) {
  const oeuvre = row  
  const id = "1"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <Ellipsis className="size-4" />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <Link to={`${id}/livres`} >
        <DropdownMenuItem >Voir les livres</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Faire une réclamation</DropdownMenuItem>
        <DropdownMenuItem>Voir les factures</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
