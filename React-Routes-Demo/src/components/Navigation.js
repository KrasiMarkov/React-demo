import {Link, NavLink} from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {

    const setNavStyle = ({isActive}) => {

        return isActive 
            ? styles['active-link']
            : styles['noneactive-link']
    }

    return(
        <nav>
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/starships/10">Starships</Link></li>
                <li><Link to="/pricing/premium">Premium Pricing</Link></li>
                <li><Link to="/contacts">Contacts</Link></li> */}

                <li><NavLink className={setNavStyle} to="/">Home</NavLink></li>
                <li><NavLink className={setNavStyle} to="/about">About</NavLink></li>
                <li><NavLink className={setNavStyle} to="/pricing">Pricing</NavLink></li>

                <li>
                    <NavLink 
                      to="/starships/10"
                    //   style={({isActive}) => {
                    //     return isActive
                    //       ? {backgroundColor: 'aquamarine'}
                    //       : {backgroundColor: 'yellow'}
                    //   }}

                     className={setNavStyle}
                    >
                      Starships 
                    </NavLink>
                </li>

                <li><NavLink className={setNavStyle} to="/pricing/premium">Premium Pricing</NavLink></li>
                <li><NavLink  className={setNavStyle} to="/contacts">Contacts</NavLink></li>
            </ul>
        </nav>
    );
}