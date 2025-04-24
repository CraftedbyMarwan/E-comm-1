import React from 'react'
import { useSelector } from 'react-redux'
import Modal from './Modal'

export default function ModalContainer() {

    const {show_modal} = useSelector(store => store.appSlice)
  
    return (
        <>
            {show_modal && <Modal/>}
        </>
    )
}
