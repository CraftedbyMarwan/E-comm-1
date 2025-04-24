import React from 'react'
import { useSelector } from 'react-redux'
import LoadingScreen from './LoadingScreen'

export default function LoadingContainer() {
  const { is_loading2 } = useSelector(store => store.settingsSlice)

  return (
    <>
      {is_loading2 && <LoadingScreen/>}
    </>
  )
}
