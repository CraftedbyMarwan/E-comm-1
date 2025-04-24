import React from 'react'
import { memo } from 'react';

function EmailValidator({email}) {
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.length === 0)
        return "Enter a Valid Email Address"

    if (emailReg.test(email))
        return

    return <p className='text-red-600'>*Invalid Email</p>
}

export default memo(EmailValidator)
