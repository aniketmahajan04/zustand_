import { Box, Container, Typography } from "@mui/material"
import useHabitStore from "./store/store"
import { AddHabitForm } from "./components/add-habit-form"
import { HabbitList } from "./components/habit-list"

function App() {
  // const store = useHabitStore();
  // console.log(store);
  
  return <Container>
    <Box>
      <Typography variant="h2" gutterBottom component="h1" align="center">
        Habit Tracker
      </Typography>

      {/* form */}
      <AddHabitForm />

      {/* list */}

      <HabbitList />

      {/* state */}
    </Box>
  </Container>
}

export default App
