import { create } from "zustand";

interface Password {
  password: string;
  passwordConfirmation: string;
  setPassword: (password: string) => void;
  setPasswordConfirmation: (passwordConfirmationString: string) => void;
}

const passwordStore = create<Password>((set) => ({
  password: "not-set",
  passwordConfirmation: "not-set",
  setPassword: (passwordString: string) => set({ password: passwordString }),
  setPasswordConfirmation: (passwordString: string) =>
    set({ password: passwordString }),
}));

export default passwordStore;
