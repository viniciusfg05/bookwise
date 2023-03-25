import { AvataFallback, AvataImage, AvataRoot } from "./styles"

interface AvatarProps {
  image: string;
  hideProfile: 'true' | 'false';
}

export function AvatarProfile({ image, hideProfile}: AvatarProps) {
  return (
    // @ts-ignore
    <AvataRoot mobile={{ '@bp2': `${hideProfile}` }}>
      <AvataImage src={image} />
      <AvataFallback />
    </AvataRoot>
  )
}