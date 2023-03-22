import { styled } from "../../../styles/stitches.config"
import * as Avatar from '@radix-ui/react-avatar';

export const AvataRoot = styled((Avatar.Root), {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: "2.81rem",
  height: "2.81rem",
  borderRadius: '100%',
  backgroundColor: "blackA.blackA3",

  variants: {
    mobile: {
      true: {
        // width: "2rem",
        // height: "2rem",
        display: "none",

      },
    },
  },
})

export const AvataImage = styled((Avatar.Image), {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvataFallback = styled((Avatar.Fallback), {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: "violet.violet11",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})