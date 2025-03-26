import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

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
    removeHabit: (id: string) => void;
    toggleHabit: (id: string, date: string) => void;
}

const useHabitStore = create<HabitState>()(
    devtools(
        persist((set) => {
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
        }),
        removeHabit: (id) => set((state) => ({
            habit : state.habit.filter((habit) => habit.id !== id)
        })),
        toggleHabit: (id, date) => set((state) => ({
                habit: state.habit.map((habit) => habit.id === id ? {
                    ...habit, 
                    completedDate: habit.completedDate.includes(date)
                        ? habit.completedDate.filter((d) => d !== date)
                        : [...habit.completedDate, date],
                } : habit
            ),
        }))
    };
}, {
    name: "habit-store",
}
)));

export default useHabitStore;