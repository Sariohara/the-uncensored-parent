import React from "react";
import {
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";
import { Link, Grid, IconButton } from "@mui/material";

const socialIcons = [
    {
        icon: FacebookIcon,
        url: "https://www.facebook.com/groups/theuncensoredparent/",
    },
    {
        icon: InstagramIcon,
        url: "https://www.facebook.com/groups/theuncensoredparent/",
    },
];

const Social = ({direction = "row"}) => {
    return (
        <Grid container direction={direction} spacing={2}>
            {socialIcons.map((item, i) => (
                <Grid item key={i}>
                    <Link target="_blank" href={item.url}>
                        <IconButton>
                            <item.icon color="secondary" fontSize="large" />
                        </IconButton>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

Social.propTypes = {};

export default Social;
