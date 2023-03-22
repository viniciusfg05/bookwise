import Image from "next/image";
import { BackgroundSidebarStyles } from "./styles"
import ElipseCentral from "../../../../assets/ElipseCentral.svg"
import ElipseTopRight from "../../../../assets/ElipeTopRight.svg"
import ElipeTopLeft from "../../../../assets/ElipeTopLeft.svg"
import EllipseBotton from "../../../../assets/EllipseBotton.svg"

export function BackgroundSidebar(): JSX.Element {
  return (
    <BackgroundSidebarStyles>
      <Image src={ElipseCentral} alt="" />
      <Image src={ElipseTopRight} alt="" />
      <Image src={ElipeTopLeft} alt="" />
      <Image src={EllipseBotton} alt="" />
    </BackgroundSidebarStyles>
  )
}