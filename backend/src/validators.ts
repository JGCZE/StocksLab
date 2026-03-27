import z from "zod";
import { EGender } from "./enums";

const address = {
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  geo: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
};

const User = z.object({
  id: z.number(),
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  address: z.object(address),
  phone: z.string(),
  website: z.string(),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(),
    bs: z.string(),
  }),
});

const UpdatedAddressSchema = z.object(address).pick({
  street: true,
  suite: true,
  city: true,
});

const UpdatedUserSchema = User.omit({
  email: true,
  phone: true,
  address: true,
}).extend({
  address: UpdatedAddressSchema,
  gender: z.nativeEnum(EGender),
  hasMoney: z.boolean(),
  pet: z.string(),
});


export const Users = z.array(User);
export const UpdatedUsersSchema = z.array(UpdatedUserSchema);
