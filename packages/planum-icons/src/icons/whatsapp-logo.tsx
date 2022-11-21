import { forwardRef } from 'react'

import type {
  IconProps,
  IconWeight,
  PaintFunction,
  RenderFunction,
} from '@uvodohq/planum'
import { IconBase, renderPathForWeight } from '@uvodohq/planum'

const pathsByWeight = new Map<IconWeight, PaintFunction>()

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
))

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight)

export const WhatsappLogoIcon = forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => (
    <IconBase
      ref={ref}
      alt="Whatsapp Logo Icon"
      {...props}
      renderPath={renderPath}
    />
  ),
)

WhatsappLogoIcon.displayName = 'WhatsappLogoIcon'
