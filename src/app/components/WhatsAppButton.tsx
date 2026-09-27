import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  productName?: string,
  productPrice?: string
}

export default function WhatsAppButton({
  productName,
  productPrice
}: WhatsAppButtonProps) {
  const phoneNumber = "50495221031";
  const message = `Me gustaria comprar ${productName} por ${productPrice}`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <span className={cn(
      "inline-flex items-center justify-center rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    )}>
      <a
        href={whatsappURL}
      >
        Comprar
      </a>
    </span>
  );
}          