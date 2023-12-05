import { FC, ReactNode } from 'react'

import { Burger } from '@/assets'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

export const DropdownMenu: FC<DropdownMenuProps> = ({ align, children, trigger }) => {
  return (
    <div>
      <DropdownMenuRadix.Root>
        <DropdownMenuRadix.Trigger asChild>
          {trigger ?? (
            <button aria-label={'Customise options'} className={s.IconButton}>
              <Burger />
            </button>
          )}
        </DropdownMenuRadix.Trigger>

        <DropdownMenuRadix.Portal>
          <DropdownMenuRadix.Content align={align} className={s.DropdownMenuContent}>
            {children}
            <DropdownMenuRadix.Arrow className={s.DropdownMenuArrow} />
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      </DropdownMenuRadix.Root>
    </div>
  )
}

type DropdownMenuProps = {
  align?: 'center' | 'end' | 'start'
  children?: ReactNode
  trigger?: ReactNode
}

// import { FC, ReactNode } from 'react'
//
// import { Burger, Delete, Edit } from '@/assets'
// import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
//
// import s from './drop-down-menu.module.scss'
//
// export const DropdownMenu: FC<DropdownMenuProps> = ({ align, children, trigger }) => {
//   return (
//     <div className={s.delete}>
//       <DropdownMenuRadix.Root>
//         <DropdownMenuRadix.Trigger asChild>
//           {trigger ?? (
//             <button aria-label={'Customise options'} className={s.IconButton}>
//               <Burger />
//             </button>
//           )}
//         </DropdownMenuRadix.Trigger>
//
//         <DropdownMenuRadix.Portal>
//           <DropdownMenuRadix.Content align={align} className={s.DropdownMenuContent} sideOffset={4}>
//             <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
//               {children}
//             </DropdownMenuRadix.Item>
//             <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} />
//             <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
//               <Edit /> Edit
//             </DropdownMenuRadix.Item>
//             <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} />
//             <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
//               <Delete /> Delete
//             </DropdownMenuRadix.Item>
//             <DropdownMenuRadix.Arrow className={s.DropdownMenuArrow} />
//           </DropdownMenuRadix.Content>
//         </DropdownMenuRadix.Portal>
//       </DropdownMenuRadix.Root>
//     </div>
//   )
// }
//
// type DropdownMenuProps = {
//   align?: 'center' | 'end' | 'start'
//   children?: ReactNode
//   trigger?: ReactNode
// }
