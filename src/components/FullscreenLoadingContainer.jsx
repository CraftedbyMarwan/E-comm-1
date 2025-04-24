import React from 'react'
import FullscreenLoading from './FullscreenLoading'
import { useSelector } from 'react-redux'

export default function FullscreenLoadingContainer() {
  const { is_loading } = useSelector(store => store.settingsSlice)

  return (
    <>
      {is_loading && <FullscreenLoading/>}
    </>
  )
}
