import { PageTitle } from "@/src/components/shared"
import { Outlet } from "react-router-dom"


const Oeuvres = () => {
  return (
    <div>
      <PageTitle>Oeuvres</PageTitle>
      <Outlet />
    </div>
  )
}

export default Oeuvres