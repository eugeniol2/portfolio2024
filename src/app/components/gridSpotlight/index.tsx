import { Box } from '@mui/material'
import React, { useEffect, useRef } from 'react'

import { gridCellTile, gridLinesPaintedIn, tokens } from 'src/app/theme/tokens'
import { hexToRGBA } from 'src/app/utils/hexToRGBA'

const CURSOR_X = '--cursor-x'
const CURSOR_Y = '--cursor-y'

const SPOTLIGHT_RADIUS = '15rem'
const CORE_OPACITY = 0.65
const MIDWAY_OPACITY = 0.28
const EDGE_OPACITY = 0.07
const FADE_DURATION = '450ms'
const RESTING_POSITION = '-100vmax'
const RECEDED_OPACITY = 0.12
const POINTER_CURSOR = 'pointer'

const FINE_POINTER_QUERY = '(hover: hover) and (pointer: fine)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

const spotlight = [
  `radial-gradient(circle ${SPOTLIGHT_RADIUS} at var(${CURSOR_X}) var(${CURSOR_Y})`,
  `${hexToRGBA(tokens.accent, CORE_OPACITY)} 0%`,
  `${hexToRGBA(tokens.accent, MIDWAY_OPACITY)} 38%`,
  `${hexToRGBA(tokens.accent, EDGE_OPACITY)} 68%`,
  'transparent 100%)'
].join(', ')

const gridMask = gridLinesPaintedIn('#000')

const hasDirectText = (element: Element | null) => {
  if (!element) return false

  return Array.from(element.childNodes).some(
    node =>
      node.nodeType === Node.TEXT_NODE && Boolean(node.textContent?.trim())
  )
}

const hasPointerCursor = (element: Element | null) =>
  element !== null && getComputedStyle(element).cursor === POINTER_CURSOR

const shouldRecedeBehind = (element: Element | null) =>
  hasDirectText(element) || hasPointerCursor(element)

const GridSpotlight = () => {
  const overlayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const overlay = overlayRef.current

    if (!overlay) return

    const hasFinePointer = window.matchMedia(FINE_POINTER_QUERY).matches
    const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches

    if (!hasFinePointer || prefersReducedMotion) return

    let pendingFrame = 0
    let cursorX = 0
    let cursorY = 0
    let hoveredElement: Element | null = null

    const paintSpotlight = () => {
      pendingFrame = 0
      overlay.style.setProperty(CURSOR_X, `${cursorX}px`)
      overlay.style.setProperty(CURSOR_Y, `${cursorY}px`)
      overlay.style.opacity = shouldRecedeBehind(hoveredElement)
        ? String(RECEDED_OPACITY)
        : '1'
    }

    const handlePointerMove = (event: PointerEvent) => {
      cursorX = event.clientX
      cursorY = event.clientY
      hoveredElement = event.target instanceof Element ? event.target : null

      if (!pendingFrame) {
        pendingFrame = requestAnimationFrame(paintSpotlight)
      }
    }

    const handlePointerLeave = () => {
      overlay.style.opacity = '0'
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerleave', handlePointerLeave)

      if (pendingFrame) cancelAnimationFrame(pendingFrame)
    }
  }, [])

  return (
    <Box
      ref={overlayRef}
      aria-hidden="true"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0,
        transition: `opacity ${FADE_DURATION} ease`,
        [CURSOR_X]: RESTING_POSITION,
        [CURSOR_Y]: RESTING_POSITION,
        backgroundImage: spotlight,
        backgroundAttachment: 'fixed',
        maskImage: gridMask,
        WebkitMaskImage: gridMask,
        maskSize: `${gridCellTile}, ${gridCellTile}`,
        WebkitMaskSize: `${gridCellTile}, ${gridCellTile}`,
        maskRepeat: 'repeat',
        WebkitMaskRepeat: 'repeat'
      }}
    />
  )
}

export default GridSpotlight
