 import Image from "next/image"
 import WebConfig from "@/config/WebConfig";

export function Banner() {
  return (
      <div className={"relative"}>
          <Image src={WebConfig.getBanner} alt={'Banner'} layout={"responsive"} width={1920} height={140} />
      </div>
  )
}

