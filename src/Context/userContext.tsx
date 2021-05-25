import create from "zustand";

export interface UserContext{
    userId: number
    userName: string
  }
  
const useUser = create<UserContext>((set) => ({
    userId: 1,
    userName: "Joao",
}));

export default useUser;
