"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Briefcase, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Services" },
  { href: "/carrieres", label: "Carrières" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive =
      href === "/" ? pathname === href : pathname.startsWith(href);
    return (
      <Link
        href={href}
        onClick={() => setIsOpen(false)}
        className={cn(
          "transition-colors hover:text-primary",
          isActive ? "text-primary font-semibold" : "text-muted-foreground"
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Briefcase className="h-6 w-6 text-primary" />
          <span>BROKOU INC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:flex">
            <Link href="/login">Espace Admin</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
              <div className="flex justify-between items-center mb-8">
                 <Link href="/" className="flex items-center gap-2 font-bold text-lg" onClick={() => setIsOpen(false)}>
                    <Briefcase className="h-6 w-6 text-primary" />
                    <span>BROKOU INC</span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X />
                    <span className="sr-only">Fermer le menu</span>
                </Button>
              </div>
              <nav className="flex flex-col items-start gap-6 text-lg">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </nav>
              <Button asChild className="w-full mt-8">
                <Link href="/login" onClick={() => setIsOpen(false)}>Espace Admin</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
