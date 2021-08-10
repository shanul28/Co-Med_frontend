import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Box } from '@material-ui/core';
import axios from "axios";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import DatePick from "./datePicker";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: "#4cacc7",
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, date, address, available_capacity_dose1, available_capacity_dose2, fee, min_age_limit) {
    return {
        name, date, address, available_capacity_dose1, available_capacity_dose2, fee, min_age_limit
    };
}

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
        width: '100%'
    },
    TableContainer: {
        margin: "5% 0% 15% 0%",
        padding: "0 0.2% 0% 0.2%"
    },

    button: {
        margin: theme.spacing(1),
        padding: "10px",
        backgroundColor: "#dadfe8",
        borderRadius: "25px"
    },
    pincodeSearch: {
        // margin: "3% 30% 0 30%",
        display: "flex",
        flexGrow: "1",
        alignItems: "center",
        alignContent: 'center',
        padding: "70px 90px 20px 220px"

    },
    image: {
        width: "100%",
        height: "auto",
        padding: "1% 0%"
    },
    inputRoot: {
        color: 'inherit',
        backgroundColor: "#dadee6",
        borderRadius: "25px",
        width: "30%"
    },
    inputInput: {

        padding: theme.spacing(0.85, 1, 1.4, 0),

        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function VaccineSlotTable() {
    const pincode = [];
    const [input, setInput] = useState([]);

    const handleChange = (e) => {

        setInput(e.target.value);
        // setPincode(input);
    }
    const [inputDate, setInputDate] = useState(new Date());

    const handleDatePick = (date) => {

        setInputDate(date)

    }
    console.log(inputDate);
    const handlePincodeSearch = (e) => {

        pincode.push(input);
        console.log("submitted");
        console.log(pincode);
        const url = `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode[0]}&date=${inputDate}`;
        // "mongodb+srv://admin-shanul:ShanulComed@cluster0.met7i.mongodb.net/CoMedDB?retryWrites=true&w=majority"
        console.log(url);
        fetchApi(url);
        pincode.pop();
        // inputDate.pop();

    }

    const [apiData, setApiData] = useState([]);


    apiData.map((items) =>
        console.log(items)
    );

    // useEffect(() => {

    async function fetchApi(url) {
        const response = await axios.get(url).then((res) => {
            if (res.data) {
                console.log(res.data);
                setApiData(res.data.sessions);
                return res;
            } else {
                console.log("No data available for choosen date");
            }
        }).catch((err) => {
            console.log(err);
        })

    }

    const rows = [];
    apiData.map((items) =>
        rows.push(createData(items.name, items.date, items.address, items.available_capacity_dose1, items.available_capacity_dose2, items.fee, items.min_age_limit))
    )

    const classes = useStyles();

    return (
        <>
            <img className={classes.image} src={"https://calendarmedia.blob.core.windows.net/assets/f0de4b33-13eb-4075-9960-cacdc58c0d93.jpg"} alt="vaccine" />

            <Box className={classes.pincodeSearch} xs={12} sm={3}>
                <DatePick className={classes.datepicker} onPick={handleDatePick} />
                <InputBase
                    onChange={handleChange}
                    placeholder="Enter Pincode…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }} />
                <Button onClick={handlePincodeSearch}
                    variant="contained"
                    color="default"
                    className={classes.button}
                    startIcon={<SearchIcon />}>
                    Search
                </Button>
            </Box>

            <TableContainer className={classes.TableContainer} component={Paper} justify="center">
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Center Name</StyledTableCell>
                            <StyledTableCell align="right">Date</StyledTableCell>
                            <StyledTableCell align="right">Address</StyledTableCell>
                            <StyledTableCell align="right">Dose-1</StyledTableCell>
                            <StyledTableCell align="right">Dose-2</StyledTableCell>
                            <StyledTableCell align="right">Vaccine Fee</StyledTableCell>
                            <StyledTableCell align="right">Minimum Age </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.index}>
                                <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.date}</StyledTableCell>
                                <StyledTableCell align="right">{row.address}</StyledTableCell>
                                <StyledTableCell align="right">{row.available_capacity_dose1}</StyledTableCell>
                                <StyledTableCell align="right">{row.available_capacity_dose2}</StyledTableCell>
                                <StyledTableCell align="right">{row.fee}</StyledTableCell>
                                <StyledTableCell align="right">{row.min_age_limit}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
// mongo "mongodb+srv://cluster0.met7i.mongodb.net/myFirstDatabase" --username admin - shanul