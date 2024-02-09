import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().email({ message: "Provide a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password should be 6 charecter long" }),
});

export const LoginSchemaResolver = zodResolver(schema);

export const loginDefaultValues = {
  username: undefined,
  password: undefined,
};
