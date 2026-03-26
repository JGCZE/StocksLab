import z from "zod";

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

const Users = z.array(User);

enum EGender {
  MALE = "male",
  FEMALE = "female",
}

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

const UpdatedUsersSchema = z.array(UpdatedUserSchema);

type TUpdatedUsers = z.infer<typeof UpdatedUsersSchema>;

const resolveTypicoUsers = (data: any) => {
  const validUsers = Users.parse(data);

  return validUsers.reduce<TUpdatedUsers>((acc, curr) => {
    const { id, address: { street, suite, city } } = curr;

    const gender = id < 5 ? EGender.MALE : EGender.FEMALE;

    const hasMoney = id < 3 ? true : false;

    const pet = id > 5 ? "dog" : "cat";

    const newUsers = {
      ...curr,
      gender,
      hasMoney,
      pet,
      address: {
        street,
        suite,
        city,
      },
    }

    acc.push(newUsers);

    return acc;
  }, [])
};

export default resolveTypicoUsers;
