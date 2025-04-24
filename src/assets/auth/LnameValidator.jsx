import React from 'react'
import { memo } from 'react';

function LnameValidator({lname}) {
    const strReg = /^[A-Za-z][A-Za-z-]{2,14}$/;
    if (lname.length === 0)
        return "Last name must contain 3-15 alphabet letters"

    if (strReg.test(lname))
        return

    return <p className='text-red-600'>*Invalid First Name</p>
}

export default memo(LnameValidator)