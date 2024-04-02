type User = {
    name: string;
    email: string
}

type Adherent = {
    id?: string;
    pseudo:string;
    name: string;
    prenom: string;
    rue: string;
    ville: string;
    codePostale: string;
    numeroTelephone: string;
    dateInscription: Date;
    nombreEmpruntEnCours: number;
}


type Oeuvre = { 
    id?: string;
    isbn: string;
    titre: string;
    auteur: string;
    nombreLivreLibre: number;
}

type Emprunt = {
    id?: string;
    dateRetourTheorique: string;
    dateRetourEffective?: string | null;
    nombreRappel: number,
    livre?: Oeuvre,
    adherent?: Adherent
}

type Livre<Oeuvretype> = {
    oeuvre: Oeuvretype,
    numeroInventaire: string,
    etatLivre: boolean
}