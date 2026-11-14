import { CheckoutStepper } from "@/components/ui/CheckoutStepper";
import { TermsAgreement } from "@/components/ui/TermsAgreement";
import { TermsToc } from "@/components/ui/TermsToc";
import { TermsDocument } from "@/components/sections/TermsDocument";
import { shareImage } from "@/content/seo";
import { terms, termsPath } from "@/content/terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: terms.seoTitle,
  description: terms.seoDescription,
  path: termsPath,
  image: shareImage.home,
});

// Step 1 of the flow, reached only from the footer (Figma 91:1749, phones 91:1856): the
// terms to read, then the acceptance box that unlocks the payment page. On wide screens
// (xl) the contents panel sits beside the document; narrower, the document stands alone
// as on phones, with the desktop padding and type from md.
export default function TermsPage() {
  return (
    <>
      <CheckoutStepper current={0} />
      <main id="main" className="mx-auto flex max-w-280 gap-8 px-4 pb-6 md:px-10 md:pb-24">
        <div className="hidden xl:block">
          <TermsToc />
        </div>
        <div className="mx-auto flex w-full max-w-207 min-w-0 flex-col gap-4 md:gap-6">
          <TermsDocument />
          <TermsAgreement />
        </div>
      </main>
    </>
  );
}
