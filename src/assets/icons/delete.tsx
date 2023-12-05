import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={16}
    ref={ref}
    viewBox={'0 0 16 16'}
    width={16}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#a)'}>
      <path
        d={
          'M14 4h-3.3V2.9A1.6 1.6 0 0 0 9 1.3H7A1.6 1.6 0 0 0 5.3 3v1H2a.7.7 0 0 0 0 1.3h.7v7.4a2 2 0 0 0 2 2h6.6a2 2 0 0 0 2-2V5.3h.7A.7.7 0 1 0 14 4ZM6.7 2.9c0-.1.1-.2.3-.2h2c.2 0 .3 0 .3.2V4H6.7V2.9Zm5.3 9.8a.7.7 0 0 1-.7.6H4.7a.7.7 0 0 1-.7-.6V5.3h8v7.4Z'
        }
        fill={'currentColor'}
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h16v16H0z'} fill={'currentColor'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
