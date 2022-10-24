import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';
import './Sidebar.css';

export class Sidebar extends Component {
  render() {

    const handleActive = ({isActive}) => {
        return isActive?'current nav-link':'nav-link'
    }

    return (
      <div>
        <ul className='nav flex-column'>
            <li className='nav-item'>
                <NavLink to={'/'} className={handleActive} end>Home</NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to={'/gioi-thieu'} className={handleActive}>About</NavLink>
            </li>

            <li className='nav-item'>
                <NavLink to={'/san-pham'} className={handleActive}>Product</NavLink>
            </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar