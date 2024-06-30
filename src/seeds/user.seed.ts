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
  {
    fullname: "john doe",
    email: "john.doe@example.com",
    password: "johndoe123",
    phone: "0987654321",
    role: ROLE.USER,
  },
  {
    fullname: "jane smith",
    email: "jane.smith@example.com",
    password: "janesmith123",
    phone: "0123456789",
    role: ROLE.USER,
  },
  {
    fullname: "alice wonderland",
    email: "aliceweonderland@example.com",
    password: "alice123",
    phone: "0765432109",
    role: ROLE.USER,
  },
  {
    fullname: "bob builder",
    email: "bob@example.com",
    password: "bobbuilder123",
    phone: "0909090909",
    role: ROLE.USER,
  },
  {
    fullname: "emma stone",
    email: "emma@example.com",
    password: "emmastone123",
    phone: "0808080808",
    role: ROLE.USER,
  },
  {
    fullname: "michael jordan",
    email: "michael@example.com",
    password: "michael123",
    phone: "0707070707",
    role: ROLE.USER,
  },
  {
    fullname: "sarah connor",
    email: "sarah@example.com",
    password: "sarah123",
    phone: "0606060606",
    role: ROLE.USER,
  },
];
