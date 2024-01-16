import { tv } from 'tailwind-variants'

export const HeadingVariants = tv({
  base: ['ui-font-bold ui-tracking-tight'],
  variants: {
    variant: {
      title: 'ui-text-muted-1',
      subtitle: 'ui-text-muted-3',
    },
    size: {
      '3xs': 'sm:ui-text-md ui-text-xs',
      '2xs': 'sm:ui-text-lg ui-text-base',
      xs: 'sm:ui-text-2xl ui-text-lg',
      sm: 'sm:ui-text-3xl ui-text-xl',
      md: 'sm:ui-text-4xl ui-text-2xl',
      lg: 'sm:ui-text-5xl ui-text-3xl',
      xg: 'sm:ui-text-6xl ui-text-4xl',
      xxg: 'sm:ui-text-7xl ui-text-5xl',
    },
    position: {
      centered: 'ui-mx-auto ui-text-center',
      left: 'ui-mr-left ui-text-start',
      right: 'ui-ml-right ui-text-end',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'title',
    position: 'left',
  },
})
