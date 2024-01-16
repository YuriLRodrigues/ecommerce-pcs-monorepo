import { tv } from 'tailwind-variants'

export const ContainerVariants = tv({
  base: 'p-2 my-4 max-w-[1920px]',
  variants: {
    width: {
      full: 'w-full',
      fit: 'w-fit',
    },
    position: {
      centered: 'mx-auto',
      left: 'mr-auto',
      right: 'ml-auto',
    },
  },
  defaultVariants: {
    position: 'left',
    width: 'full',
  },
})
