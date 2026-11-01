import { useCallback } from 'react'

function usePointerSpotlight() {
  const updateSpotlight = useCallback((event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - bounds.left
    const y = event.clientY - bounds.top

    event.currentTarget.style.setProperty('--spotlight-x', `${x}px`)
    event.currentTarget.style.setProperty('--spotlight-y', `${y}px`)
  }, [])

  const handlePointerEnter = useCallback((event) => {
    updateSpotlight(event)
    event.currentTarget.style.setProperty('--spotlight-opacity', '1')
  }, [updateSpotlight])

  const handlePointerLeave = useCallback((event) => {
    event.currentTarget.style.setProperty('--spotlight-opacity', '0')
  }, [])

  return {
    onPointerMove: updateSpotlight,
    onPointerEnter: handlePointerEnter,
    onPointerLeave: handlePointerLeave,
  }
}

export default usePointerSpotlight
