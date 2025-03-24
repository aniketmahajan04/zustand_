import { create } from "zustand";

export interface Habits {
    id: string,
    name: string,
    frequency: "daily" | "weekly";
    completedDate: string[],
    createdAt: string;
}

interface HabitState {
    habit: Habits[]
}

const useHabitStore = create<HabitState>()(() => {
    return {
        habits: []
    };
});

export default useHabitStore;