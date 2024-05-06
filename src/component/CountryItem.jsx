import React from 'react';
import './countryItem.css';
import data from '../data.json/'
import { useSelector } from 'react-redux';


const CountryItem = ({ flag, name, population, region, capital }) => {

    const theme = useSelector(store => store.theme)

    const formateNumber = (num) => {

        let oldNum = num.toString();
        let newNum = '';
        for (let i = 0; i < oldNum.length; i++) {
            newNum += oldNum[i];
            if ((oldNum.length - i - 1) % 3 === 0 && i !== oldNum.length - 1) {
                newNum += ',';
            }
        }
        return newNum;
    }

    return (
        <div className={`country-item ${theme}`}>
            <figure>
                <img src={flag} alt="" />
            </figure>
            <div>
                <h2>{name}</h2>
                <p> <span>population:</span> <span>{formateNumber(population)}</span></p>
                <p> <span>Region: </span><span>{region}</span></p>
                <p> <span>Capital: </span><span>{capital}</span></p>
            </div>
        </div>
    )
}

export default CountryItem
