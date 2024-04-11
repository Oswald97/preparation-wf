import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Veuillez entrer une adresse email valide"),
    password: z.string(),
  });