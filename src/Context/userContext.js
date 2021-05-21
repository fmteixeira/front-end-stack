import create from "zustand";

const useUser = create((set) => ({
    userId: 1,
    userName: "Joao",
    updateUser: (user) => set((state) => ({ userId: user.userId, userName: user.userName })),
}));

export default useUser;
