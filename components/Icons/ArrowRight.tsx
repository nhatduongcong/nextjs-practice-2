// Libs
import React from 'react'
import type { IconProps } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'

const ArrowRight = (propsIcon: IconProps) => (
  <Icon {...propsIcon}>
    <path d='M0.612558 0.868804C0.68513 0.796049 0.771341 0.738325 0.866256 0.69894C0.96117 0.659555 1.06292 0.639282 1.16568 0.639282C1.26845 0.639282 1.3702 0.659555 1.46511 0.69894C1.56003 0.738325 1.64624 0.796049 1.71881 0.868804L6.91256 6.06255C6.9705 6.12038 7.01647 6.18906 7.04783 6.26466C7.07919 6.34027 7.09534 6.42132 7.09534 6.50318C7.09534 6.58503 7.07919 6.66609 7.04783 6.74169C7.01647 6.8173 6.9705 6.88598 6.91256 6.9438L1.71881 12.1376C1.41256 12.4438 0.918808 12.4438 0.612558 12.1376C0.306308 11.8313 0.306308 11.3376 0.612558 11.0313L5.13756 6.50005L0.606309 1.9688C0.306309 1.6688 0.306308 1.1688 0.612558 0.868804Z' />
  </Icon>
)

ArrowRight.displayName = 'ArrowRight'

export default ArrowRight