import React, { useStyle } from 'react';
import { Card, Box, CardContent, Grid, Typography } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames"

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...'
    }

    return (<div className={styles.container}>
        <Typography variant='h4' className={styles.heading}> Covid-Cases</Typography>
        <img className={styles.image} src='https://nasscom.in/sites/default/files/Landing_page_banner/Advisories_on_COVIT-19_banner_0_0.jpg' />

        <Grid container spacing={3} justify="center" >
            <Grid item component={Card} xs={12} sm={3} className={cx(styles.card, styles.infected)}>
                <CardContent className={cx(styles.cardContentI)} >
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varaint="body2">Total active cases of COVID-19 </Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} sm={3} className={cx(styles.card, styles.recovered)}>
                <CardContent className={cx(styles.cardContentR)} >
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={recovered.value} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varaint="body2">Total recovered cases of COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} sm={3} className={cx(styles.card, styles.deaths)}>
                <CardContent className={cx(styles.cardContentD)} >
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={deaths.value} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography varaint="body2">Total death caused by COVID-19</Typography>
                </CardContent>
            </Grid>
        </Grid>
    </div>)
}
export default Cards;