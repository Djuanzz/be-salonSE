enum ROLE {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const userSeeds = [
  {
    fullname: "admin",
    email: "admin@gmail.com",
    password: "admin123",
    phone: "1234567890",
    role: ROLE.ADMIN,
  },
  {
    fullname: "warnabiru1",
    email: "warnabiru1@gmail.com",
    password: "warnabiru123",
    phone: "0812267366353",
  },
  {
    fullname: "warnakuning1",
    email: "warnakuning1@gmail.com",
    password: "warnakuning123",
    phone: "081663827736",
  },
];
