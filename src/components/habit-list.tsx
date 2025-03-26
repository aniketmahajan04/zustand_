import { Box, Button, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import useHabitStore, { Habits } from "../store/store";
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; 
import DeleteIcon from "@mui/icons-material/Delete";

export const HabbitList = () => {
    const { habit, removeHabit, toggleHabit } = useHabitStore();
    const today = new Date().toISOString().split("T")[0];

    const getStreak = (habit: Habits) => {
        let streak = 0;
        let currentDate = new Date();

        while(true){
            const dateString = currentDate.toISOString().split("T")[0];

            if(habit.completedDate.includes(dateString)){
                streak++;
                currentDate.setDate(currentDate.getDate() - 1);
            } else {
                break;
            }
        }
        return streak;
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 4
        }}>
            {habit.map((habit) => (
                <Paper key={habit.id} elevation={2} sx={{ p:2 }}>
                    <Grid container alignContent="center">
                        <Grid xs={12} sm={6}>
                            <Typography variant="h6">{habit.name}</Typography>
                            <Typography variant="body2" color="text.secondary">{habit.frequency}</Typography>
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                                <Button variant="outlined" color={
                                    habit.completedDate.includes(today) ? "success" : "primary"
                                }
                                startIcon={<CheckCircleIcon />}
                                onClick={() => toggleHabit(habit.id, today)}
                                >
                                    {habit.completedDate.includes(today)
                                    ? "Completed"
                                    : "Mark complete"}
                                </Button>

                                <Button variant="outlined" color="error"
                                startIcon={<DeleteIcon />}
                                onClick={() => removeHabit(habit.id)}
                                >Remove</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 2 }}>
                        <Typography>
                            Current streak: { getStreak(habit) }
                        </Typography>
                        <LinearProgress variant="determinate" value={getStreak(habit)/30 * 100}/>
                    </Box>
                </Paper>
            ))}
        </Box>
    )
}
