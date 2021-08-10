import React from "react";
import { makeStyles, Typography, Box, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footer: {
        display: "flex",
        flexGrow: '1',
        flexWrap: "wrap",
        flexDirection: 'bottom',
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        justifyContent: 'center',
        // backgroundColor: "#5f636b",
        background: 'url("http://freedomsway.org/redesign2/wp-content/uploads/2016/08/footer-background-1440x200.png")',
        marginTop: "5% ",
        padding : "10% 0 1% 0",
    },
    text: {
        color: '#fff'
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <Typography className={classes.text} variant="subtitle1">Co-Med &reg;{" "}{new Date().getFullYear()}</Typography>
        </Box>
    )
}
export default Footer;