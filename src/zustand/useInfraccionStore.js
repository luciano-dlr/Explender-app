import { create } from 'zustand';

export const useInfraccionStore = create((set) => ({
    InfraccionList: null,
    setInfraccionList: (data) => set({ userInfo: data }),
}));
