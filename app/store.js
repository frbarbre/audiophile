import { create } from "zustand";

const store = (set) => ({
    test: "",
    setTest: (test) => set(() => ({ test: test})),
})

export const useStore = create(store)