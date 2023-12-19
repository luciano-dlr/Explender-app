import {create} from 'zustand';

export const useAuthorizationsStore = create((set) => ({
  userAuthorizationsList: null, 
  setUserAuthorizationsList: (data) => set({ userAuthorizationsList: data }),
}));