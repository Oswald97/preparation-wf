import { z } from "zod";

export const oeuvreSchema = z.object({
  isbn: z
    .string({ required_error: "Veuillez entrer un code isbn" })
    .min(1, "Veuillez entrer un code isbn"),
  titre: z
    .string({ required_error: "Veuillez entrer le titre de l'oeuvre" })
    .min(1, "Veuillez entrer le titre de l'oeuvre"),
  auteur: z
    .string({
      required_error: "Veuillez entrer le nom de l'auteur",
    })
    .min(1, "Veuillez entrer le nom de l'auteur"),
});
