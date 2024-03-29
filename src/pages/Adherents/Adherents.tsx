import { PageTitle } from "@/src/components/shared"
import { Outlet } from "react-router-dom"


const Adherents = () => {
  return (
    <div>
      <PageTitle>Adhérents</PageTitle>
      
      <Outlet />
    </div>
  )
}

export default Adherents