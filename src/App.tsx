import { Box, Container, Typography } from "@mui/material"
import useHabitStore from "./store/store"
import { AddHabitForm } from "./components/add-habit-form"

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
      {/* state */}
    </Box>
  </Container>
}

export default App
