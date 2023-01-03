import { Box, styled, Text } from '@ignite-ui/react'

export const ProfileBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  gap: '$4',
  flexDirection: 'column',

  label: {
    display: 'flex',
    gap: '$2',
    flexDirection: 'column',
  },
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',
})
