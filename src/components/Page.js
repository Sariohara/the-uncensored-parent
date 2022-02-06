import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Paper } from "@mui/material";
import AOS from 'aos';

import getTheme from "../theme";

export const useDarkMode = () => {
    const [themeMode, setThemeMode] = useState("light");
    const [mounted, setMounted] = useState(false);

    const setMode = (mode) => {
        try {
            localStorage.setItem("theme", mode);
        } catch (e) {
            console.log(e);
        }
        setThemeMode(mode);
    };

    const toggleMode = () => {
        themeMode === "light" ? setMode("dark") : setMode("light");
    };

    useEffect(() => {
        try {
            const localTheme = localStorage.getItem("theme");
            localTheme ? setThemeMode(localTheme) : setThemeMode("light");
        } catch (e) {
            console.log(e);
        }
        setMounted(true);
    }, []);

    return { themeMode, toggleMode, setMode, mounted };
};

const Page = ({ children }) => {

    // remove server-side injeccted css
    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }

        AOS.init({
            duration: 1000,
            once: true,
            delay: 0,
            easing: 'ease-in-out',
            offset: 0,
        });

    }, []);
    
    const { themeMode, toggleMode, setMode, mounted } = useDarkMode();

    useEffect(() => {
        AOS.refresh();
    }, [themeMode, mounted]);
    
    return (
        <ThemeProvider theme={getTheme(themeMode, toggleMode)}>
            <CssBaseline />
            <Paper elevation={0}>{children}</Paper>
        </ThemeProvider>
    );
};

Page.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Page;
