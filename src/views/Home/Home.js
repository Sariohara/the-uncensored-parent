import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    section: {
        height: "50vh",
        backgroundImage:
            "url(https://res.cloudinary.com/baked-bean/image/upload/v1644159260/hero-home_beyt3b.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "top-center",
    },
    container: {
        height: "100%",
    },
    content: {
        height: "100%",
    },
}));

const Home = () => {
    const styles = useStyles();
    const theme = useTheme();
    return (
        <Box>
            <Paper className={styles.section} elevation={3}>
                <Container className={styles.container} maxWidth="lg">
                    <Grid
                        container
                        alignItems="center"
                        className={styles.content}
                    >
                        <Grid item xs={12}>
                            <Typography
                                fontWeight={600}
                                color="white"
                                variant="h2"
                                component="h1"
                            >
                                We love those little a-holes
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </Box>
    );
};

export default Home;
