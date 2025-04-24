import React from 'react'
import { memo } from 'react';

function FnameValidator({fname}) {
    const strReg = /^[A-Za-z][A-Za-z-]{2,14}$/;
    if (fname.length === 0)
        return "First name must contain 3-15 alphabet letters"

    if (strReg.test(fname))
        return

    return <p className='text-red-600'>*Invalid First Name</p>
}

export default memo(FnameValidator)