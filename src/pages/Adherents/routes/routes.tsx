import { RouteObject } from "react-router-dom";
import Adherents from "../Adherents";
import { AdherentDetails, AdherentList } from "@/src/features/adherents/components";
import AdherentEmprunt from "@/src/features/adherents/components/adherentEmprunt";

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
export const adherentRoutes:RouteObject = {
  path: "adherents",
  element: <Adherents />,
  children: [
    {
      path: "",
      element: <AdherentList />
    },
    {
      path: ":id",
      element: <AdherentDetails />,
      children: [
        {
          path : "emprunts",
          element: <AdherentEmprunt emprunts={emprunts} />
        }
      ]
    }
  ],
};
