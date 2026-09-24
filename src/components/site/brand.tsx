import { Link } from "@tanstack/react-router";
import logo from "@/assets/asihwebe-lockup.png.asset.json";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" className={`inline-flex shrink-0 items-center ${inverse ? "bg-background p-2" : ""}`} aria-label="Asihwebe Foundation home"><img src={logo.url} alt="Asihwebe Foundation" width={760} height={570} className="h-14 w-auto object-contain sm:h-16" /></Link>;
}
