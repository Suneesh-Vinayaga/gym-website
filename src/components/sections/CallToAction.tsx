
'use client';

import { Button } from '@/components/ui/button';
import { Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function CallToAction() {
    
  return (
    <section id="join" className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-accent-foreground/90">
            Your transformation begins with a single step. Join the TOM FITNESS family today and unlock your true potential.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" variant="primary" className="text-lg font-bold">
              <Link href="/join">Join Now</Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 border-t border-accent-foreground/20 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <Phone className="h-6 w-6 mb-2"/>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:123-456-7890" className="mt-1 text-accent-foreground/90 hover:text-white">123-456-7890</a>
                </div>
                <div className="flex flex-col items-center">
                    <MapPin className="h-6 w-6 mb-2"/>
                    <h3 className="font-semibold">Address</h3>
                    <p className="mt-1 text-accent-foreground/90">123 Fitness Ave, Strongville, ST 12345</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
