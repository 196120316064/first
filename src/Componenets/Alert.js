import React from 'react'

export default function Alert(prop) {

    const capitalize = (word) => {
        const l = word.toLowerCase();
        return l.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <div style={{height:'50px'}}>
        {prop.alert && <div className={`alert alert-${prop.alert.typ} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(prop.alert.typ)} </strong>{prop.alert.msg}
        </div>}
        </div>
    )
}
