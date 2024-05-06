import React, { useEffect, useRef, useState } from 'react';
import './filter.css';
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from '../store/filterSlice';

const Filter = () => {
    const theme = useSelector(state => state.theme);
    const search = useSelector(store => store.search);
    const dispatch = useDispatch();

    const [filters, setFilter] = useState('Filter by Region');
    const [filterBtn, setFilterBtn] = useState('hide')
    const dropDown = useRef();

    const handleFilter = (value) => {
        setFilter(value);
        setFilterBtn('hide');

    }
    const toggleFilterBtn = () => {
        setFilterBtn((pre) => {
            return pre === 'hide' ? '' : 'hide';
        })
    }

    useEffect(() => {
        setFilter('Filter by Region');
    }, [search])

    useEffect(() => {
        switch (filters) {
            case 'All':
                dispatch(filterAction.all())
                break;
            case 'Africa':
                dispatch(filterAction.africa());
                break;
            case 'America':
                dispatch(filterAction.america())
                break;
            case 'Asia':
                dispatch(filterAction.asia());
                break;
            case 'Europe':
                dispatch(filterAction.europe());
                break;
            case 'Oceania':
                dispatch(filterAction.oceania());
                break;
            default:
                dispatch(filterAction.all())
                break;
        }

    }, [filters]);

    useEffect(() => {
        const closeFilter = (e) => {
            if (!dropDown.current.contains(e.target)) {
                setFilterBtn('hide');
            }
        }
        document.addEventListener('mousedown', closeFilter)
    })

    return (

        <div className={`filter ${theme}`} ref={dropDown}>
            <div className={`filter-bar ${filterBtn} ${theme}`} onClick={toggleFilterBtn}>
                <div>{filters}</div>
                <IoIosArrowDown />
            </div>
            <ul className={`filter-option ${theme} ${filterBtn}`} role='list'>
                <div>
                    <li onClick={() => handleFilter('All')}>All</li>
                    <li onClick={() => handleFilter('Africa')}>Africa</li>
                    <li onClick={() => handleFilter('America')}>America</li>
                    <li onClick={() => handleFilter('Asia')}>Asia</li>
                    <li onClick={() => handleFilter('Europe')}>Europe</li>
                    <li onClick={() => handleFilter('Oceania')}>Oceania</li>
                </div>
            </ul>
        </div>


    )
}

export default Filter
