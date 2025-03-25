import Image from "next/image"
import WebConfig from "@/app/config/WebConfig";

export function Banner() {
 return (
     <div className={"relative h-fit w-full"}>
         <img src={WebConfig.getBanner} alt={'Banner'} className={"object-fill w-full h-full"} />
     </div>
 )
}

