// The design's rectangular buttons (Figma 19:1932 and 19:1934): solid brand red, or
// white with a red border. Both are at least 52px tall, as the handoff asks.
type ButtonLinkProps = {
  href: string;
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

const variants = {
  primary: "border-brand-red bg-brand-red text-white hover:border-brand-red-dark hover:bg-brand-red-dark",
  secondary: "border-brand-red bg-white text-brand-red hover:bg-brand-red hover:text-white",
} as const;

export function ButtonLink({ href, variant, children, className = "" }: ButtonLinkProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-13 items-center justify-center rounded-sm border-2 px-7 py-3.5 text-center text-action font-semibold shadow-button transition-colors duration-200 ease-refined active:scale-98 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-red ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
