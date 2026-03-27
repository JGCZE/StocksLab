import z from "zod";
import { EGender } from "../enums";
import { UpdatedUsersSchema, Users } from "../validators";


type TUpdatedUsers = z.infer<typeof UpdatedUsersSchema>;

const resolveTypicoUsers = (data: unknown) => {
  const validUsers = Users.parse(data);

  return validUsers.reduce<TUpdatedUsers>((acc, curr) => {
    const { id, address: { street, suite, city } } = curr;

    const gender = id < 5 ? EGender.MALE : EGender.FEMALE;

    const hasMoney = id < 3;

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
