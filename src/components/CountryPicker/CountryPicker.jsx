import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";
import image from "../../assets/images/corona.png";

import { fetchCountries } from "../../api";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        C
        <span>
          <img src={image} alt="O" />
        </span>
        VID-19 TRACKER
      </div>
      <FormControl className={styles.formControl}>
        <div className={styles.label}>
          <h2>Country</h2>
        </div>
        <NativeSelect
          className={styles.options}
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="global">Global</option>
          {fetchedCountries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
