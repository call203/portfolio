import { create } from "zustand";

type ViewState = {
  section: string | null;
  setSection: (section: string | null) => void;
};

export const useViewStore = create<ViewState>((set) => ({
  section: "",
  setSection: (section) => set({ section })
}));
