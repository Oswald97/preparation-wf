import useFetch from "@/src/hooks/useFetch";
import { ADHERENT_URL } from "@/src/utils/_constants";
import { AdherentCard } from ".";
import AdherentAddBtn from "./adherentAddBtn";
const adherentList = () => {
  // const [adherents, setAdherents] = useState([]);
  // Using fetch - then
  // useEffect(() => {
  //   fetch(ADHERENT_URL)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setAdherents(data);
  //     });
  // }, []);

  // use async await notation
  // useEffect(() => {
  //   async function fetchAdherents() {
  //     const response = await fetch(ADHERENT_URL);
  //     const data = await response.json();
  //     setAdherents(data);
  //   }

  //   fetchAdherents();
  // }, []);

  const { data: adherents, setData: setAdherent, isLoading, error } = useFetch(ADHERENT_URL);

  if (isLoading) return <p>En cours de chargement ...</p>;
  if (error) return <p> Une erreur s'est produite</p>;

  return (
    <>
      <div className="flex justify-end mb-4">
        <AdherentAddBtn setAdherent={setAdherent}/>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
        {adherents.map((adherent) => (
            <AdherentCard key={adherent.id} adherent={adherent} />
        ))}
      </div>
    </>
  );
};

export default adherentList;
