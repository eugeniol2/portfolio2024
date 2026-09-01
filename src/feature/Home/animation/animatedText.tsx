import './styles.css'

import React from 'react'

import { tokens } from 'src/app/theme/tokens'

const VIEWBOX = '0 0 501 355'
const CIRCLE_RADIUS = 57
const CIRCLE_OUTLINE_LENGTH = 358
const CIRCLE_DRAW_DELAY_MS = 150
const TEXT_START_X = 20

const CONSTELLATION_CIRCLES = [
  { cx: 182, cy: 92 },
  { cx: 104, cy: 263 },
  { cx: 416, cy: 92 },
  { cx: 263, cy: 263 }
]

const CONSTELLATION_LINES = [
  { x1: 205.42, y1: 143.73, x2: 247.42, y2: 208.73, length: 77, delayMs: 1500 },
  {
    x1: 301.64,
    y1: 220.65,
    x2: 382.64,
    y2: 137.65,
    length: 115,
    delayMs: 1700
  },
  { x1: 368.2, y1: 123.46, x2: 144.2, y2: 222.46, length: 244, delayMs: 1900 }
]

const SIGNATURE_LINES = [
  { text: 'Full-stack', baselineY: 118, width: 461, delayMs: 250 },
  { text: 'Developer', baselineY: 289, width: 430, delayMs: 450 }
]

const drawVariables = (length: number, delayMs: number) =>
  ({
    '--draw-length': length,
    '--draw-delay': `${delayMs}ms`
  } as React.CSSProperties)

export const AnimatedText = () => {
  return (
    <svg
      viewBox={VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      style={
        {
          '--signature-ink': tokens.text,
          '--signature-accent': tokens.accent,
          '--signature-line': tokens.accentDim,
          display: 'block',
          width: '100%',
          height: 'auto',
          maxWidth: '100%'
        } as React.CSSProperties
      }
    >
      {CONSTELLATION_CIRCLES.map(circle => (
        <circle
          key={`${circle.cx}-${circle.cy}`}
          className="signature-circle"
          cx={circle.cx}
          cy={circle.cy}
          r={CIRCLE_RADIUS}
          style={drawVariables(CIRCLE_OUTLINE_LENGTH, CIRCLE_DRAW_DELAY_MS)}
        />
      ))}

      {CONSTELLATION_LINES.map(line => (
        <line
          key={`${line.x1}-${line.y1}`}
          className="signature-line"
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          style={drawVariables(line.length, line.delayMs)}
        />
      ))}

      {SIGNATURE_LINES.map(line => (
        <text
          key={line.text}
          className="signature-text"
          x={TEXT_START_X}
          y={line.baselineY}
          textLength={line.width}
          lengthAdjust="spacingAndGlyphs"
          style={{ '--draw-delay': `${line.delayMs}ms` } as React.CSSProperties}
        >
          {line.text}
        </text>
      ))}
    </svg>
  )
}
