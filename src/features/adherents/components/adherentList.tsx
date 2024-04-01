import { AdherentCard } from ".";
import AdherentAddBtn from "./adherentAddBtn";
const adherentList = () => {
  return (
    <>
      <div className="flex justify-end mb-4">
        <AdherentAddBtn />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <AdherentCard />
        <AdherentCard />
        <AdherentCard />
        <AdherentCard />
        <AdherentCard />
        <AdherentCard />
        <AdherentCard />
      </div>
    </>
  );
};

export default adherentList;
