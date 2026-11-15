import { CheckoutBackdrop } from "@/components/ui/CheckoutBackdrop";
import { HomeHeader } from "@/components/sections/HomeHeader";
import { ServiceOverlay } from "@/components/sections/ServiceOverlay";
import { serviceDetails } from "@/content/services";

// Shared by the terms page and the payment page (Figma 91:1749, 95:1788, revised
// 2026-11-15): the red lacquer ground with the carved dragon under the site's own
// navbar, whose service links open the same overlays as on the home page.
export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="checkout-page relative isolate min-h-svh bg-lacquer font-thai text-parchment">
      <CheckoutBackdrop />
      <HomeHeader homeHref="/" />
      {children}
      {serviceDetails.map((service) => (
        <ServiceOverlay key={service.slug} service={service} />
      ))}
    </div>
  );
}
