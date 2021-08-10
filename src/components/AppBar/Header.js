import { Link } from "react-router-dom";
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BarChartIcon from '@material-ui/icons/BarChart';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import InfoIcon from '@material-ui/icons/Info';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function HeaderIndex() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}><Link to={`/vaccine-notification`} style={{ textDecoration: 'inherit', color: 'inherit' }}> Vaccine Notifications</Link></MenuItem>

            <MenuItem onClick={handleMenuClose}><Link to={`/covid-cases`} style={{ textDecoration: 'inherit', color: 'inherit' }}>Covid Cases</Link>
            </MenuItem>

        </Menu >
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <NotificationsActiveIcon />
                    </Badge>
                </IconButton>
                <Link to={`/vaccine-notification`} style={{ textDecoration: 'inherit', color: 'inherit' }} >
                    <p>Vaccine Notification</p></Link>
            </MenuItem>
            <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <BarChartIcon />
                    </Badge>
                </IconButton>
                <Link to={`/covid-cases`} style={{ textDecoration: 'inherit', color: 'inherit' }} >
                    <p>Covid-19 Cases</p>
                </Link>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit" >
                    <InfoIcon />
                </IconButton>
                <p>About</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <CssBaseline />
            <AppBar position="static" style={{ background: '#1b5f8f' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="secondary"
                        aria-label="open drawer"
                    >
                        <Link to={`/`} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                            <LocalHospitalIcon />
                        </Link>
                    </IconButton>
                    <Link to={`/`} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                        <Typography className={classes.title} variant="h4" noWrap >
                            Co-Med
                        </Typography>
                    </Link>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="Vaccine Notification" color="inherit">
                            <Badge color="secondary">
                                <NotificationsActiveIcon />
                            </Badge>
                            {/* <Link to='/vaccine-notification' /> */}
                            <Link to={`/vaccine-notification`} style={{ textDecoration: 'inherit', color: 'inherit' }} >
                                <Typography variant='subtitle1'>
                                    Vaccine Notification
                                </Typography>
                            </Link>
                        </IconButton>
                        <IconButton aria-label="covid cases" color="inherit">
                            <Badge color="secondary">
                                <BarChartIcon />
                            </Badge>
                            <Link to={`/covid-cases`} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                                <Typography variant='subtitle1' >
                                    Covid Case
                                </Typography>
                            </Link>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <InfoIcon />
                            <Typography variant='subtitle1'>
                                About
                            </Typography>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div >
    );
}
