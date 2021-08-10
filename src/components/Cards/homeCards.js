import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Grid } from "@material-ui/core"
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    grid: {
        marginTop: "5%",
        // paddingTop: '10%',
        maxWidth: "100%"
        // paddingLeft: "40px"
    },
    root: {
        maxWidth: 300,
        marginTop: '10%',
        // marginLeft: '40%',
        marginLeft: '25%',
        marginRight: "2%",
        marginBottom: '20%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function HomeCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleExpandClick1 = () => {
        setExpanded(!expanded);
    };

    return (

        <Grid container className={classes.grid} justify='center' spacing={4} >
            <CssBaseline />
            <Grid item xs={12} sm={6} md={4}  >
                <Card className={classes.root} justify='center'>
                    <CardHeader
                        title="111SARS-CoV-2"
                        subheader="September 14, 2016" />
                    <CardMedia
                        className={classes.media}
                        image="https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg"
                        title="Corona Virus" />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This illustration, created at the Centers for Disease Control and Prevention (CDC), reveals ultrastructural morphology exhibited by coronaviruses. Note the spikes that adorn the outer surface of the virus, which impart the look of a corona surrounding the virion, when viewed electron microscopically.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick1}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>

                            <Typography paragraph>
                                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

                                Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
                            </Typography>
                            <Typography paragraph>
                                The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.
                            </Typography>
                            <Typography paragraph>
                                The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
                            </Typography>


                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
            {/* 2nd card */}
            <Grid item xs={12} sm={6} md={4} >
                <Card className={classes.root}>
                    <CardHeader

                        title="SARS-CoV-2"
                        subheader="September 14, 2016"
                    />
                    <CardMedia

                        className={classes.media}

                        image="https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg"
                        // image="https://youtu.be/1j2xRwysi1U"
                        title="Paella dish"

                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This illustration, created at the Centers for Disease Control and Prevention (CDC), reveals ultrastructural morphology exhibited by coronaviruses. Note the spikes that adorn the outer surface of the virus, which impart the look of a corona surrounding the virion, when viewed electron microscopically.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>

                            <Typography paragraph>
                                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

                                Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
                            </Typography>
                            <Typography paragraph>
                                The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.
                            </Typography>
                            <Typography paragraph>
                                The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
                            </Typography>


                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>


            {/* 3rd card */}
            <Grid item xs={12} sm={6} md={4} >
                <Card className={classes.root}>
                    <CardHeader

                        title="SARS-CoV-2"
                        subheader="September 14, 2016"
                    />
                    <CardMedia

                        className={classes.media}

                        image="https://phil.cdc.gov//PHIL_Images/23311/23311_lores.jpg"
                        // image="https://youtu.be/1j2xRwysi1U"
                        title="Paella dish"

                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This illustration, created at the Centers for Disease Control and Prevention (CDC), reveals ultrastructural morphology exhibited by coronaviruses. Note the spikes that adorn the outer surface of the virus, which impart the look of a corona surrounding the virion, when viewed electron microscopically.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>

                            <Typography paragraph>
                                Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.

                                Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
                            </Typography>
                            <Typography paragraph>
                                The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face.
                            </Typography>
                            <Typography paragraph>
                                The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
                            </Typography>


                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>


        </Grid >
    );
}
