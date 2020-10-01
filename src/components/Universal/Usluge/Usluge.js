import React from 'react'
import './Usluge.scss'

import {Link} from 'react-router-dom'

const usluge = props => {
    const usluge = props.usluge.map((usluga,index) => (
        <Link to="/usluge" key={index} className="Usluga">
            <h4>{usluga.naziv}</h4>
            <p>{usluga.opis}</p>
        </Link>
    ))

    return <div className="Usluge">
        <h2>Usluge</h2>
        <div className="container">
        {usluge}
        </div>
    </div>
}

export default usluge