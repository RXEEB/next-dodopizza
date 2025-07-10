import { create } from "zustand";

interface State {
  activeId: number;
  setActivedId: (activeId: number) => void;
}

export const useCategoryStore = create<State>()((set) => ({
  activeId: 1,
  setActivedId: (activeId: number) => set({ activeId }),
}));
