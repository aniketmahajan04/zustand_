import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import useHabitStore from "../store/store"


export const HabbitList = () => {
    const { habit } = useHabitStore();

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
                                <Button variant="outlined">Mark Completed</Button>
                                <Button variant="outlined" color="error">Remove</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Box>
    )
}