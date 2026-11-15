import Image from "next/image";
import background from "@/public/images/terms/background.jpg";

// The flow's page ground (Figma 91:1749 fill): red silk with a lattice band, misty
// mountains and a carved dragon on the right, over the lacquer red while it loads.
// It covers the whole page, centred, as the design fills its frames.
export function CheckoutBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Image src={background} alt="" fill priority sizes="100vw" quality={75} className="object-cover" />
    </div>
  );
}
