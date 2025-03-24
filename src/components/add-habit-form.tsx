import {Box, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

export const AddHabitForm = () => {
    const [name, setName] = useState("");
    const [frequency, setFrequency] = useState<"daily" | "weekly">("daily");
    return <form>
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            gap: 2
        }}>
            <TextField label="Habit Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Habit"
                fullWidth
            />
            <FormControl fullWidth>
                <InputLabel >Frequency</InputLabel>
                <Select
                    value={frequency}
                    label="Frequency"
                    onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
                >
                    <MenuItem value={"Daily"}>Daily</MenuItem>
                    <MenuItem value={"Weekly"}>Weekly</MenuItem>
                </Select>
</FormControl>
        </Box>
    </form>
}