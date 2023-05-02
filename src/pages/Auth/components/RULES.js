export const RULES = {
  email: {
    pattern: (value = "") => value.includes("@"),
    message: "id 확인해주세여",
  },
  password: {
    pattern: (value = "") => value.length >= 8,
    message: "pw 확인해주세여",
  },
};
