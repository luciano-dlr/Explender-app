import { create } from 'zustand';
import {persist,createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthStore = create() (
  persist(
    (set,get) => ({
        userData: null,
        setUserData: (data) => set({ userData: data }),
    } ) ,
    {
      name:'auth-storage',
      storage: createJSONStorage(()=> AsyncStorage),
    }
  )
)