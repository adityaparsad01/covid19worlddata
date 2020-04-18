import React from 'react';
import {Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from  'classnames';

import styles from './Cards.module.css';

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
    console.log(confirmed);
    
    if(!confirmed) {
        return 'Loading...';
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.Infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Active Cases Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.Recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={recovered.value} duration={1.5} separator=","/>
                        </Typography>
    <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Recovered Cases Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.Deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography varaint="h5">
                            <CountUp start={0} end={deaths.value} duration={1} separator=","/>
                        </Typography>
                        <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Deaths Cases Covid-19</Typography>
                    </CardContent>
                </Grid>


            </Grid>

        </div> 
    );
}

export default Cards;