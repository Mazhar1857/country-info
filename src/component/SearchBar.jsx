import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import './searchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../store/filterSlice';

const SearchBar = () => {
    const theme = useSelector(state => state.theme);
    
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleSearchInput = (e) => {
        const value = e.target.value
        setInput(value);
    }

    useEffect(() => {
        dispatch(filterAction.searchAction(input.toLowerCase()));
    }, [input])

    useEffect(() => {
        if (input == '') {
            dispatch(filterAction.all())
        }
    }, [input]);


    return (
        <div className={`search-bar ${theme}`}>
            <input type="text" value={input} onChange={handleSearchInput} placeholder='Search for a country...' />
            <IoSearchOutline />
        </div>
    )
}
export default SearchBar
