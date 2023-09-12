import cx from 'classnames'

import { icon } from './Icon.css'

import type { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
  id: string
  className?: string
  style?: React.CSSProperties
}

export default function Icon({
  id,
  className,
  style,
  width = 24,
  height = 24,
  fill = 'none',
  ...rest
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      className={cx(icon, className)}
      style={style}
      {...rest}
    >
      <use href={`/sprite.svg#${id}`} />
    </svg>
  )
}
