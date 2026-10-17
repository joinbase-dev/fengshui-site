import { contact, footer } from "@/content/site";
import { MailIcon } from "@/components/ui/MailIcon";
import { PhoneIcon } from "@/components/ui/PhoneIcon";

const link =
  "rounded-xs underline-offset-4 transition-colors duration-200 ease-refined hover:text-red-800 hover:underline focus-visible:outline-2 focus-visible:outline-red-800";

// Figma footer (1:807): a rule across the content width, then the club's name, address,
// email and phone (each behind a red icon) beside its social links, set as plain text.
// 80px margins and 90px above and below at 1440; below md (derived) the links move
// under the name.
export function Footer() {
  return (
    <footer className="px-5 py-12 md:px-10 lg:px-20 lg:py-22.5">
      <div className="mx-auto flex max-w-wide flex-col gap-10 border-t border-rule pt-10 text-black md:flex-row md:items-start md:justify-between lg:gap-16 lg:pt-16">
        <div className="flex flex-col gap-4">
          <p className="text-footer-title font-semibold">{footer.title}</p>
          <address className="flex flex-col gap-4 text-footer not-italic">
            <span className="max-w-80">{footer.address}</span>
            <span className="flex flex-col items-start gap-2">
              <a href={`mailto:${contact.email}`} className={`-my-2.5 inline-flex min-h-11 items-center gap-1 ${link}`}>
                <MailIcon className="text-red-800" />
                <span className="sr-only">{footer.emailLabel} </span>
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phoneInternational}`}
                className={`-my-2.5 inline-flex min-h-11 items-center gap-1 ${link}`}
              >
                <PhoneIcon className="text-red-800" />
                <span className="sr-only">{footer.phoneLabel} </span>
                {contact.phone}
              </a>
            </span>
          </address>
        </div>
        <ul aria-label={footer.socialLabel} className="-mx-2 flex flex-wrap gap-x-4 md:-my-2.5">
          {footer.social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-11 items-center px-2 text-footer ${link}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
