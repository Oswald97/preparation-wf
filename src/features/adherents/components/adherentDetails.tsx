import AdherentEmprunt from "./adherentEmprunt";
import AdherentPersonnalDetails from "./adherentPersonnalDetails";

export function adherentDetails() {
  const adherent: Adherent = {
    id: "johndoe",
    pseudo: "johndoe",
    name: "DOE",
    prenom: "John",
    rue: "Champ d'oiseaux",
    ville: "Cotonou",
    codePostale: "229",
    numeroTelephone: "+229 90909090",
    dateInscription: new Date(),
    nombreEmpruntEnCours: 4,
  };

  const emprunts: Emprunt[] = [
    {
      id: "1",
      dateRetourTheorique: "20 Mars 2020",
      dateRetourEffective: null,
      nombreRappel: 0,
      livre: {
        auteur: "J. K. Rowling",
        isbn: "",
        nombreLivreLibre: 5,
        titre: "Le Prince des sangs mêlés",
      },
    },
    {
      id: "2",
      dateRetourTheorique: "20 Mars 2020",
      dateRetourEffective: null,
      nombreRappel: 0,
      livre: {
        auteur: "Robert Kiyosaki",
        isbn: "",
        nombreLivreLibre: 5,
        titre: "Rich daddy, Poor daddy",
      },
    },
    {
      id: "3",
      dateRetourTheorique: "20 Mars 2020",
      dateRetourEffective: null,
      nombreRappel: 0,
      livre: {
        auteur: "Stanley McChrystal",
        isbn: "",
        nombreLivreLibre: 5,
        titre: "Team of teams",
      },
    },
    {
      id: "4",
      dateRetourTheorique: "20 Mars 2020",
      dateRetourEffective: null,
      nombreRappel: 0,
      livre: {
        auteur: "Harry Potter et le prisonier d'Azkaban",
        isbn: "",
        nombreLivreLibre: 5,
        titre: "Le Prince des sangs mêlés",
      },
    },
  ];
  return (
    <div className="flex w-full flex-col mt-8 h-f">
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div>
          <AdherentPersonnalDetails />
        </div>
        <div className="xl:col-span-2">
          <AdherentEmprunt emprunts={emprunts} />
        </div>
      </div>
    </div>
  );
}

export default adherentDetails;
