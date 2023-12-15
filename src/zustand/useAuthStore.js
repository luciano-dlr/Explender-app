import {create} from 'zustand';

export const useAuthStore = create((set) => ({
  userData: null, 
  setUserData: (data) => set({ userData: data }),
}));