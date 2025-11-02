
import { Dumbbell, Twitter, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-7 w-7 text-accent" />
              <span className="text-xl font-bold font-headline">TOM FITNESS</span>
            </Link>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TOM FITNESS. All rights reserved.</p>
          </div>
          
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-4 font-headline">Operating Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon - Fri: 5:00 AM - 11:00 PM</li>
              <li>Sat: 7:00 AM - 9:00 PM</li>
              <li>Sun: 8:00 AM - 8:00 PM</li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold text-foreground mb-4 font-headline">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-foreground">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
