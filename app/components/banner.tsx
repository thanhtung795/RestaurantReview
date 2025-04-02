import Image from "next/image";
import WebConfig from "@/app/config/WebConfig";

export function Banner() {
  return (
    <div className={"relative w-full h-[200px]"}>
      <img
        src={WebConfig.getBanner}
        alt={"Banner"}
        className={"object-fill w-full h-full"}
      />
    </div>
  );
}
