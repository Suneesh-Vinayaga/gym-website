
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Join', href: '/join' },
];

export default function SharedHeader() {

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      // This will require a navigation to home and then scrolling
      const targetId = href.replace(/.*#/, '');
      window.location.href = `/${'#' + targetId}`;
    }
  };

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6", className)}>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        'bg-background/95 backdrop-blur-sm border-b border-border'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell className="h-7 w-7 text-accent" />
          <span className="text-xl font-bold font-headline">TOM FITNESS</span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
          <Button asChild variant="secondary" size="sm">
            <Link href="/join">Join Now</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <div className="flex flex-col gap-8 pt-10">
                <Link href="/" className="flex items-center gap-2">
                  <Dumbbell className="h-7 w-7 text-accent" />
                  <span className="text-xl font-bold font-headline">TOM FITNESS</span>
                </Link>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                     <SheetClose asChild key={link.name}>
                        <Link
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                            {link.name}
                        </Link>
                    </SheetClose>
                  ))}
                </nav>
                <SheetClose asChild>
                    <Button asChild variant="secondary" className="w-full">
                        <Link href="/join">Join Now</Link>
                    </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

