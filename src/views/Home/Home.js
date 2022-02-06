import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";

const Home = () => {
    const theme = useTheme();
    return (
        <Box>
            <Paper elevation={3}>
                <Typography>Home</Typography>
            </Paper>
        </Box>
    );
};

export default Home;
