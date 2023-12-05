import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path d={'M4 6h16v12H4z'} />
    <path
      d={
        'M19 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9 14-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9Z'
      }
      fill={'currentColor'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
