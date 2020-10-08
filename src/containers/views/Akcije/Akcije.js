import React from 'react'

import AkcijeComponent from '../../../components/Universal/Akcije/Akcije'
import AkcijeData from '../../../data/Akcije.json'

const Akcije = props => {
    return (
        <div className="Akcije">
            <AkcijeComponent akcije={AkcijeData} />
        </div>
    )
}

export default Akcije