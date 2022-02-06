import React from "react";
import { makeStyles, useTheme, alpha, styled } from "@mui/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

import ThemeSwitch from "../../components/ThemeSwitch";
import Social from "./components/Hero/Social";
import { Hidden } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    section: {
        height: "80vh",
        backgroundImage:
            "url(https://res.cloudinary.com/baked-bean/image/upload/v1644159260/hero-home_beyt3b.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "right",
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
                <ThemeSwitch />
                <Container className={styles.container} maxWidth="xl">
                    <Grid
                        container
                        alignItems="center"
                        className={styles.content}
                        justifyContent="space-between"
                    >
                        <Grid item sm={11}>
                            <Typography
                                fontWeight={600}
                                color="white"
                                variant="h2"
                                component="h1"
                            >
                                We love those little a-holes
                            </Typography>
                            <Box my={2}>
                                <Button
                                    href="#"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Click Here
                                </Button>
                            </Box>
                        </Grid>
                        <Hidden smDown>
                            <Grid item sm={1}>
                                <Social direction="column" />
                            </Grid>
                        </Hidden>
                    </Grid>
                </Container>
            </Paper>
        </Box>
    );
};

export default Home;
