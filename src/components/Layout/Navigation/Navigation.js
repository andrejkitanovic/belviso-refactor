import React from 'react'
import './Navigation.scss'

import {NavLink} from 'react-router-dom'

const navigation = props => {
    
    return <div className="Navigation">
        <NavLink to="/" exact>Pocetna</NavLink>
        <NavLink to="/usluge">Usluge</NavLink>
        <NavLink to="/galerija">Galerija</NavLink>
        <NavLink to="/akcije">Akcije</NavLink>
        <NavLink to="/cenovnik">Cenovnik</NavLink>
        <NavLink to="/zakazivanje">Zakazivanje tretmana</NavLink>
        <NavLink to="/posao">Posao</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
    </div>
}

export default navigation