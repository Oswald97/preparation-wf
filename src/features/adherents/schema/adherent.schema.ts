import { z } from "zod";

export const adherentSchema = z.object({
  pseudo: z
    .string({ required_error: "Veuillez entrer un pseudo" })
    .min(3, "Veuillez renseigner un minimum de trois caractères"),
  nom: z
    .string({ required_error: "Veuillez entrer le nom de l'adhérent" })
    .min(3, "Veuillez renseigner un minimum de trois caractères"),
  prenoms: z.string({
    required_error: "Veuillez entrer le prénom de l'adhérent",
  }),
  adresse: z.object({
    rue: z.string().nullable(),
    ville: z.string().nullable(),
    codePostal: z.string().nullable(),
    numeroTelephone: z.string(),
  }),
});
