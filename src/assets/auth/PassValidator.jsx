import React from 'react'
import { memo } from 'react'

function PassValidator({ password, passwordConfirmation }) {

    const Accepted = () => <span className='text-green-600'>✓</span>

    const NotAccepted = () => <span className='text-red-600'>〤</span>

    if (password.length === 0)
        return (
        <>
            <p>Password must contain the following:</p>
            <ul>
                <li>- At least 1 Number</li>
                <li>- At least 1 Uppercase Letter</li>
                <li>- At least 1 Special Character</li>
                <li>- Password must be between 10-20 characters</li>
            </ul>
        </>
    )
    return (
        <>
            <p>Password must contain the following:</p>
            <ul>
                <li>{/[0-9]/.test(password) ? <Accepted /> : <NotAccepted />} <span> at least 1 number </span></li>
                <li>{/(?=(.*[A-Z]){1})/.test(password) ? <Accepted /> : <NotAccepted />} <span> at least 1 Uppercase Letter </span></li>
                <li>{/(?=(.*[\W]){1})/.test(password) ? <Accepted /> : <NotAccepted />} <span> at least 1 Special Character </span></li>
                <li> {password.length >= 10 && password.length <= 20 ? <Accepted /> : <NotAccepted />} <span> Password must be between 10-20 characters </span> </li>
                <li> {password === passwordConfirmation ? <Accepted /> : <NotAccepted />} <span> Passwords must match </span> </li>
            </ul>
        </>
        
    )
}

export default memo(PassValidator)


