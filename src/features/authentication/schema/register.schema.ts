import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email("Veuillez entrer une adresse email valide"),
  lastname: z.string(),
  firstname: z.string(),
  role: z.string(),
  password: z.string(),
});
