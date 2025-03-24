import { create } from "zustand";

export interface Habits {
    id: string,
    name: string,
    frequency: "daily" | "weekly";
    completedDate: string[],
    createdAt: string;
}

interface HabitState {
    habit: Habits[];
    addHabit: (name: string, frequency: "daily" | "weekly") => void;
}

const useHabitStore = create<HabitState>()((set) => {
    return {
        habit: [],
        addHabit: (name, frequency) => set((state) => {
            return {
                habit: [
                    ...state.habit,
                    {
                        id: Date.now().toString(),
                        name,
                        frequency,
                        completedDate: [],
                        createdAt: new Date().toISOString()
                    }
                ]
            }
        })
    };
});

export default useHabitStore;