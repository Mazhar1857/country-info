import { useDispatch, useSelector } from "react-redux"
import { themesliceAction } from "../store/themeSlice";
import './themeBar.css';
import { MoonSvg, MoonOutlineSvg } from "./svg";

import { IoMoonSharp } from "react-icons/io5";



const ThemeBar = () => {
    const theme = useSelector(store => store.theme)
    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(themesliceAction.toggleTheme());
    }

    return (
        <>
            <div className={`theme-bar ${theme}`}>
                <h1>Where in the world?</h1>
                <div className={`moon-icon`} onClick={toggleTheme}>
                    <figure>
                        <IoMoonSharp style={{ color: `${theme === 'light' ? 'black' : 'white'}` }} />
                    </figure>
                    <div>Dark Mode</div>
                </div>
            </div>
        </>
    )
}

export default ThemeBar