// import React, { useState } from 'react';
// 
// import TextField from '@material-ui/core/TextField';



//     textField: {
//         marginTop: theme.spacing(-5.9),
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
// }));

// export default function DatePickers() {
//     const classes = useStyles();
//     const [date, setDate] = useState([]);
//     const handleDatePicker = (event) => {
//         setDate(event.target.value);
//         console.log(date);
//     }

//     return (
//         <form className={classes.container} noValidate>
//             <TextField

//                 id="date"
//                 label="Pick Date"
//                 type="date"
//                 defaultValue="22-05-2021"
//                 className={classes.textField}
//                 InputLabelProps={{
//                     shrink: true,
//                 }}
//                 value={date}

//                 onChange={handleDatePicker}
//             />
//         </form>
//     );
// }
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DateRangeIcon from '@material-ui/icons/DateRange';
import 'react-datepicker/dist/react-datepicker.css';
import * as moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { FormatAlignJustify } from "@material-ui/icons";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
        margin: "1rem  2rem 1rem 1rem ",
        padding: "10px 10px",
        width: "400px",
        height: "35px",
        justify: "center",
        borderRadius: '30px',
        backgroundColor: '#dadee6',
        border: "0"
    },
    datepicker: {
        padding: '50px'
    }
}))

function DatePick({ onPick }, date) {

    const styles = useStyles();
    const [selectedDate, setSelectedDate] = useState("");

    return (<div>
        <DateRangeIcon />
        <DatePicker color="inherit" className={styles.container} placeholderText="Select Date" selected={selectedDate} onChange={(date) => { setSelectedDate(date); onPick(moment(date).format('DD-MM-YYYY')) }}
            onSelect={(date) => { onPick(moment(date).format('DD-MM-YYYY')) }}
            dateFormat="dd-MM-yyyy" minDate={new Date()} />
    </div >)

}
export default DatePick;