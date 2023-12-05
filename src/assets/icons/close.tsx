import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={16}
    ref={ref}
    viewBox={'0 0 12 12'}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'm7.41 6 4.3-4.29A1 1 0 1 0 10.29.29L6 4.59 1.71.29A1 1 0 0 0 .29 1.71L4.59 6l-4.3 4.29A1 1 0 0 0 1 12.01a1 1 0 0 0 .71-.3L6 7.41l4.29 4.3a1 1 0 1 0 1.42-1.42L7.41 6Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
