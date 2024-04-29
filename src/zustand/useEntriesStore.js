import { create } from 'zustand';

export const useEntriesStore = create((set) => ({
  entriesList: null,
  setEntriesList: (data) => set({ entriesList: data }),
}));