import { AdherentCard } from "."
const adherentList = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
      <AdherentCard />
      <AdherentCard />
      <AdherentCard />
      <AdherentCard />
      <AdherentCard />
      <AdherentCard />
      <AdherentCard />
    </div>
  )
}

export default adherentList