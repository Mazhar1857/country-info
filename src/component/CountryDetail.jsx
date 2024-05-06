import React from 'react'
import './countryDetail.css'
import { useSelector } from 'react-redux'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';

const CountryDetail = ({ flag, name, nativeName, population, region, subRegion, capital, topLevelDomain, currencies, languages, borderCountries }) => {
    const theme = useSelector(store => store.theme)

    const { ProductName } = useParams();

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
        <>
            {(ProductName == name.replace(' ', '-')) && <div className={`country-detail-page ${theme}`}>
                <Link className='link' to='/'><button className='back-btn'><FaArrowLeftLong /><div>Back</div></button></Link>
                <div className='country'>
                    <figure>
                        <img src={flag} alt="" />
                    </figure>
                    <div className={`country-detail ${theme}`}>
                        <h2>{name}</h2>
                        <div>
                            <div>
                                <p> <span>Native Name:</span> <span>{nativeName}</span></p>
                                <p> <span>Population:</span> <span>{formateNumber(population)}</span></p>
                                <p> <span>Region:</span> <span>{region}</span></p>
                                <p> <span>Sub Region:</span> <span>{subRegion}</span></p>
                                <p> <span>Capital:</span> <span>{capital}</span></p>
                            </div>
                            <div>
                                <p> <span>Top level Domain:</span> <span>{topLevelDomain.join(',')}</span></p>
                                <p> <span>Currencies:</span> <span>{currencies && currencies.map(item => item["code"]).join(', ')}</span></p>
                                <p> <span>Languages:</span> <span>{languages && languages.map(item => item["name"]).join(',')}</span></p>
                            </div>
                        </div>
                        <div className='border-countries'>
                            <p>Border Countries:</p>
                            <div className={theme}>
                                {borderCountries && borderCountries.map(item => {
                                    return <div key={item}>{item}</div>
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default CountryDetail
