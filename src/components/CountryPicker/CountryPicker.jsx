import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, StylesProvider } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api'

import ListIcon from '@material-ui/icons/List';


const CountryPicker = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchApiCountry = async () => {
            setCountries(await fetchCountries())
        }
        fetchApiCountry();
    }, [setCountries]);
    console.log(countries);

    return (
        <>

            <FormControl className={styles.formControl}>

                <NativeSelect defaultValue="" onChange={(e) => { handleCountryChange(e.target.value) }}>

                    <option value="">Global</option>

                    {countries.map((countryName, index) =>
                        <option key={index} value={countryName}> {countryName}</option>)
                    }
                    <ListIcon className={styles.icon} />
                </NativeSelect>
               
            </FormControl></>
    )
}
export default CountryPicker;